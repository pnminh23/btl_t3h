
document.getElementById('tab1').style.display = 'block';
        // Mở tab được chọn và ẩn các tab khác
    function openTab(evt, tabName) {
        var i, tabcontent, buttonElement;

        // Ẩn tất cả nội dung tab
        tabcontent = document.getElementsByClassName('list-products');
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none';
        }

        // Xóa lớp 'active' khỏi các liên kết tab
        // console.log(buttonElement = document.querySelectorAll('.content-products .list-buttons button'))
        buttonElement = document.querySelectorAll('.content-products .list-buttons button');
        for (i = 0; i < buttonElement.length; i++) {
            // console.log(buttonElement[i]);
            buttonElement[i].className = buttonElement[i].className.replace(' active', '');
        }

        // Hiển thị tab được chọn và đặt lớp 'active' cho liên kết
        document.getElementById(tabName).style.display = 'block';
        evt.currentTarget.className += ' active';
        // console.log(evt.currentTarget);

    }
