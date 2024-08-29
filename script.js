document.addEventListener('DOMContentLoaded', function() {
    // "문의하기" 버튼 클릭 시 스크롤 이동 및 플로팅 푸터 숨기기
    document.getElementById('scroll-button').addEventListener('click', function() {
        const formContainer = document.getElementById('form-section');

        if (formContainer) {
            // 부드럽게 해당 폼 섹션으로 스크롤
            formContainer.scrollIntoView({ behavior: 'smooth' });

            // 스크롤 이동이 완료되면 플로팅 푸터 숨기기
            setTimeout(function() {
                document.getElementById('sticky-footer').style.display = 'none';
            }, 1000); // 스크롤 애니메이션 시간 (약 1초) 후에 푸터를 숨김
        }
    });

    // "전문보기" 링크 클릭 시 모달 열기
    document.getElementById('privacy-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('privacy-modal').style.display = "block";
    });

    // 모달 닫기 버튼
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('privacy-modal').style.display = "none";
    });

    // 모달 외부 클릭 시 닫기
    window.onclick = function(event) {
        if (event.target == document.getElementById('privacy-modal')) {
            document.getElementById('privacy-modal').style.display = "none";
        }
    }

    // 스크롤 시 맨 끝에 도달하면 플로팅 푸터 숨기기
    window.addEventListener('scroll', function() {
        const stickyFooter = document.getElementById('sticky-footer');
        const footer = document.querySelector('footer');

        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top <= windowHeight) {
            stickyFooter.style.display = 'none';
        } else {
            stickyFooter.style.display = 'flex';
        }
    });
});
