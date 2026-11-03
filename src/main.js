import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // 1. 과목 전환 (수학 vs 국어·인성) 탭 기능
  const subjectBtns = document.querySelectorAll('.subject-btn');
  const subjectPanels = document.querySelectorAll('.subject-content-panel');
  const heroAvatar = document.getElementById('heroAvatar');
  const currentSubjectTag = document.getElementById('currentSubjectTag');
  const floatingSymbols = document.querySelectorAll('.floating-symbol');

  const symbolsData = {
    math: ['∑', 'π', '∫', '∞', 'f(x)', 'Δ'],
    korean: ['훈', '글', '말', 'ㄱ', 'ㅎ', '📖'],
  };

  subjectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetSubject = btn.getAttribute('data-target');
      if (!targetSubject) return;

      // 탭 활성화 상태 변경
      subjectBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // 콘텐츠 패널 전환
      subjectPanels.forEach((panel) => {
        if (panel.getAttribute('data-subject') === targetSubject) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });

      // 아바타 및 태그 변경
      if (heroAvatar) {
        heroAvatar.textContent = targetSubject === 'math' ? '📐' : '📚';
      }

      if (currentSubjectTag) {
        if (targetSubject === 'math') {
          currentSubjectTag.textContent = '수학교육 연구 & 수업 모드 📐';
          currentSubjectTag.className = 'current-subject-indicator indicator-math';
        } else {
          currentSubjectTag.textContent = '국어·인성교육 연구 & 수업 모드 📚';
          currentSubjectTag.className = 'current-subject-indicator indicator-korean';
        }
      }

      // 배경 부유 기호 실시간 전환
      if (symbolsData[targetSubject]) {
        floatingSymbols.forEach((sym, index) => {
          sym.style.opacity = '0';
          setTimeout(() => {
            sym.textContent = symbolsData[targetSubject][index % symbolsData[targetSubject].length];
            sym.style.opacity = '0.22';
          }, 200);
        });
      }
    });
  });

  // 2. 10반 상장 꽃 칸 월별 필터 탭 기능
  const monthBtns = document.querySelectorAll('.month-tab-btn');
  const flowerCards = document.querySelectorAll('.flower-card');

  monthBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedMonth = btn.getAttribute('data-month');
      monthBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      flowerCards.forEach((card) => {
        const cardMonth = card.getAttribute('data-month');
        if (selectedMonth === 'all' || cardMonth === selectedMonth) {
          card.style.display = 'flex';
          card.style.animation = 'panelFadeIn 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. 10반 상장 꽃 칸 클릭 인터랙션
  window.handleFlowerClick = function(name) {
    alert(`🌸 10반 [${name}] 학생에게 따뜻한 칭찬과 응원의 마음이 전달되었습니다! ✨`);
  };

  // 4. 스크롤 등장 애니메이션 (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('active'));
  }

  // 4. 부드러운 앵커 스크롤 이동
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    });
  });
});
