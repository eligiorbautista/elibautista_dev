document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    const noticeModal = new bootstrap.Modal(document.getElementById('noticeModal'));
    noticeModal.show();
}, false);

document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

function valCheck() {
    var menuClass = document.getElementById("menubar-icon");
    if (document.getElementById('menubar').checked) {
        menuClass.classList.remove("fa-xmark");
    } else {
        menuClass.classList.add("fa-xmark");

    }
}

function closeNavBar() {
    var menuClass = document.getElementById("menubar-icon");
    document.getElementById('menubar').checked = false;
    menuClass.classList.remove("fa-xmark");
    menuClass.classList.add("fa-solid-fa-bars");
}

window.addEventListener('scroll', function () {
    valCheck();
    closeNavBar();
});

document.addEventListener('DOMContentLoaded', function () {
    var projectCards = document.querySelectorAll('.card');
    projectCards.forEach(function (card) {
        var image = card.querySelector('img');
        var title = card.querySelector('.card-header').innerText;
        var date = card.querySelector('.date').innerText;
        var description = card.querySelector('.card-body p').innerText;

        image.addEventListener('click', function () {
            var imageUrl = image.getAttribute('src');
            var modal = new bootstrap.Modal(document.getElementById('imageModal'), {
                keyboard: true
            });
            document.getElementById('modalImage').src = imageUrl;
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalDate').innerHTML = '<i class="fa-sharp fa-solid fa-calendar-days"></i> ' + date;
            document.getElementById('modalDescription').innerText = description;

            modal.show();
        });
    });

});