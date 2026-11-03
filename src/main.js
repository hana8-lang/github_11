import './style.css';

// ============================================================================
// 🌸 [10반 상장 꽃 칸] 기본 학생 데이터 배열 (Default Initial Data)
// ============================================================================
// 👉 코드 상에서 기본 학생 데이터를 추가하거나 수정할 수도 있습니다.
//    웹 화면의 [⚙️ 10반 관리자 모드]를 이용하면 새로고침 없이 브라우저에서 바로 추가할 수 있습니다.
//
// [속성 설명]
// - name: 학생 이름
// - month: 수여 월 키 ("nov" = 11월, "dec" = 12월)
// - monthLabel: 카드에 표시될 월 배지 텍스트 (예: "11월의 꽃 🌸")
// - award: 상장 이름 (예: "질문 대장상 🌸")
// - comment: 따뜻한 칭찬 한 줄 코멘트
// - color: 파스텔 색상 클래스
//          ("pastel-sky", "pastel-pink", "pastel-green",
//           "pastel-lavender", "pastel-peach", "pastel-lemon")
// - crown: 왕관 아이콘 (기본 "👑")
// ============================================================================
export const defaultFlowerStudents = [
  // --- 11월의 꽃밭 학생들 ---
  {
    name: '김민준',
    month: 'nov',
    monthLabel: '11월의 꽃 🌸',
    award: '질문 대장상 🌸',
    comment: '언제나 기발하고 깊이 있는 질문으로 교실 배움에 활기를 불어넣는 멋진 탐구자!',
    color: 'pastel-sky',
    crown: '👑',
  },
  {
    name: '이서연',
    month: 'nov',
    monthLabel: '11월의 꽃 🌸',
    award: '고운 말상 🌷',
    comment: '친구들의 마음에 귀 기울이고 다정한 배려의 말을 건네는 우리 반의 따뜻한 배려왕!',
    color: 'pastel-pink',
    crown: '👑',
  },
  {
    name: '박도윤',
    month: 'nov',
    monthLabel: '11월의 꽃 🌸',
    award: '창의 수학상 🌼',
    comment: '어려운 수학 문제 앞에서도 끝까지 포기하지 않고 나만의 방법으로 해결하는 끈기왕!',
    color: 'pastel-green',
    crown: '👑',
  },
  {
    name: '최지우',
    month: 'nov',
    monthLabel: '11월의 꽃 🌸',
    award: '마음 시인상 🌺',
    comment: '디지털 시 쓰기 프로젝트에서 섬세하고 따뜻한 감수성으로 모두에게 감동을 준 작가님!',
    color: 'pastel-lavender',
    crown: '👑',
  },

  // --- 12월의 꽃밭 학생들 ---
  {
    name: '정예준',
    month: 'dec',
    monthLabel: '12월의 꽃 ❄️',
    award: '인성 나눔상 🌻',
    comment: '명심보감 인성 덕목을 교실에서 솔선수범 실천하며 친구들을 묵묵히 돕는 든든한 친구!',
    color: 'pastel-peach',
    crown: '👑',
  },
  {
    name: '한채은',
    month: 'dec',
    monthLabel: '12월의 꽃 ❄️',
    award: '발표 열정상 🌸',
    comment: '자신의 생각을 조리 있고 당당하게 표현하며 모둠 토론을 훌륭하게 이끄는 리더!',
    color: 'pastel-lemon',
    crown: '👑',
  },
  {
    name: '윤하은',
    month: 'dec',
    monthLabel: '12월의 꽃 ❄️',
    award: '수호천사상 🌷',
    comment: '도움이 필요한 친구 곁으로 먼저 다가가 다정하게 손을 내밀어 주는 천사 같은 마음!',
    color: 'pastel-sky',
    crown: '👑',
  },
  {
    name: '강시우',
    month: 'dec',
    monthLabel: '12월의 꽃 ❄️',
    award: '디지털 탐험가상 🌼',
    comment: 'AI와 인터랙티브 도구를 창의적으로 다루며 늘 새로운 도전을 즐기는 멋진 개척자!',
    color: 'pastel-green',
    crown: '👑',
  },
];

// LocalStorage 키 상수
const STORAGE_KEY = 'class10_flower_students_v2';
const THEME_KEY = 'nana_portfolio_theme';

// 학생 데이터 상태 관리
let flowerStudentsData = [];

function loadStudentsData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('LocalStorage 로드 실패, 기본 데이터를 사용합니다:', e);
  }
  return [...defaultFlowerStudents];
}

function saveStudentsData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('LocalStorage 저장 실패:', e);
  }
}

// 꽃 카드 클릭 이벤트 핸들러
window.handleFlowerClick = function (name) {
  alert(`🌸 10반 [${name}] 학생에게 따뜻한 칭찬과 응원의 마음이 전달되었습니다! ✨`);
};

document.addEventListener('DOMContentLoaded', () => {
  flowerStudentsData = loadStudentsData();

  // ==========================================================================
  // 1. 테마 관리 (화사한 밝은 화면 기본 유지 + 네온 다크 전환)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  // 저장된 테마 불러오기 (기본값: 'light')
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.remove('light-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeText) themeText.textContent = '밝은 화면';
  } else {
    document.body.classList.add('light-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeText) themeText.textContent = '네온 다크';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      if (isLight) {
        if (themeIcon) themeIcon.textContent = '🌙';
        if (themeText) themeText.textContent = '네온 다크';
        localStorage.setItem(THEME_KEY, 'light');
      } else {
        if (themeIcon) themeIcon.textContent = '☀️';
        if (themeText) themeText.textContent = '밝은 화면';
        localStorage.setItem(THEME_KEY, 'dark');
      }
    });
  }

  // ==========================================================================
  // 2. '10반 상장 꽃 칸' 렌더링 및 월별 필터 탭
  // ==========================================================================
  const flowerGrid = document.getElementById('flowerGrid');
  const monthBtns = document.querySelectorAll('.month-tab-btn');
  let currentMonthFilter = 'all';

  function updateMonthBadgeCounts() {
    const allCount = flowerStudentsData.length;
    const novCount = flowerStudentsData.filter((s) => s.month === 'nov').length;
    const decCount = flowerStudentsData.filter((s) => s.month === 'dec').length;

    const countAll = document.getElementById('countAll');
    const countNov = document.getElementById('countNov');
    const countDec = document.getElementById('countDec');

    if (countAll) countAll.textContent = allCount;
    if (countNov) countNov.textContent = novCount;
    if (countDec) countDec.textContent = decCount;
  }

  function renderFlowerCards(monthFilter = currentMonthFilter) {
    if (!flowerGrid) return;
    currentMonthFilter = monthFilter;

    // 필터링된 학생 데이터 추출
    const filteredList =
      monthFilter === 'all'
        ? flowerStudentsData
        : flowerStudentsData.filter((student) => student.month === monthFilter);

    if (filteredList.length === 0) {
      flowerGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary); font-size: 16px;">
          🌸 등록된 상장 꽃 카드가 아직 없습니다. [⚙️ 10반 관리자 모드]를 눌러 첫 카드를 등록해 보세요!
        </div>
      `;
      return;
    }

    // 카드 HTML 생성
    flowerGrid.innerHTML = filteredList
      .map(
        (student) => `
        <div class="flower-card ${student.color || 'pastel-sky'} reveal active" data-month="${student.month}" onclick="handleFlowerClick('${student.name}')">
          <div class="flower-crown">${student.crown || '👑'}</div>
          <span class="flower-period-badge">${student.monthLabel || (student.month === 'nov' ? '11월의 꽃 🌸' : '12월의 꽃 ❄️')}</span>
          <h4 class="flower-student-name">${student.name}</h4>
          <span class="flower-award-title">${student.award}</span>
          <p class="flower-praise-msg">${student.comment}</p>
        </div>
      `
      )
      .join('');
  }

  // 초기 렌더링 및 카운트
  updateMonthBadgeCounts();
  renderFlowerCards('all');

  // 월별 탭 클릭 이벤트
  monthBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedMonth = btn.getAttribute('data-month');
      monthBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderFlowerCards(selectedMonth);
    });
  });

  // ==========================================================================
  // 3. 미니 관리자 모드 (Modal Popup & LocalStorage 실시간 추가)
  // ==========================================================================
  const modalBackdrop = document.getElementById('modalBackdrop');
  const adminOpenBtn = document.getElementById('adminOpenBtn');
  const floatingAdminBtn = document.getElementById('floatingAdminBtn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const addStudentForm = document.getElementById('addStudentForm');
  const resetToDefaultBtn = document.getElementById('resetToDefaultBtn');

  function openModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
      const firstInput = document.getElementById('studentName');
      if (firstInput) firstInput.focus();
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
    }
  }

  if (adminOpenBtn) adminOpenBtn.addEventListener('click', openModal);
  if (floatingAdminBtn) floatingAdminBtn.addEventListener('click', openModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // ESC 키로 모달 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // 새 꽃 카드 추가 폼 제출 이벤트
  if (addStudentForm) {
    addStudentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('studentName')?.value.trim();
      const month = document.getElementById('awardMonth')?.value || 'nov';
      const award = document.getElementById('awardTitle')?.value.trim();
      const comment = document.getElementById('praiseComment')?.value.trim();
      const color = document.getElementById('cardColor')?.value || 'pastel-pink';

      if (!name || !award || !comment) {
        alert('모든 필수 항목(학생 이름, 상 이름, 칭찬 코멘트)을 입력해 주세요!');
        return;
      }

      const monthLabel = month === 'nov' ? '11월의 꽃 🌸' : '12월의 꽃 ❄️';

      // 새로운 학생 카드 객체 생성
      const newCard = {
        name,
        month,
        monthLabel,
        award,
        comment,
        color,
        crown: '👑',
      };

      // 배열 맨 앞에 추가하여 즉시 눈에 띄도록 함
      flowerStudentsData.unshift(newCard);

      // LocalStorage 영구 저장
      saveStudentsData(flowerStudentsData);

      // UI 갱신 (배지 카운트 및 카드 렌더링)
      updateMonthBadgeCounts();

      // 현재 보고 있는 탭과 추가된 월이 맞지 않으면 해당 탭으로 자동 이동하거나 전체 탭으로 렌더링
      if (currentMonthFilter !== 'all' && currentMonthFilter !== month) {
        // 일치하는 탭 버튼 활성화
        monthBtns.forEach((b) => {
          if (b.getAttribute('data-month') === month) b.classList.add('active');
          else b.classList.remove('active');
        });
        renderFlowerCards(month);
      } else {
        renderFlowerCards(currentMonthFilter);
      }

      // 폼 초기화 및 모달 닫기
      addStudentForm.reset();
      closeModal();

      // 성공 알림 피드백
      alert(`🎉 10반 [${name}] 학생의 [${award}] 상장 꽃 카드가 성공적으로 추가되었습니다! ✨`);
    });
  }

  // 기본 데이터로 되돌리기 버튼
  if (resetToDefaultBtn) {
    resetToDefaultBtn.addEventListener('click', () => {
      if (confirm('기본 8명의 학생 데이터로 초기화하시겠습니까? (새로 추가한 데이터는 지워집니다)')) {
        flowerStudentsData = [...defaultFlowerStudents];
        saveStudentsData(flowerStudentsData);
        updateMonthBadgeCounts();
        renderFlowerCards('all');
        monthBtns.forEach((b) => {
          if (b.getAttribute('data-month') === 'all') b.classList.add('active');
          else b.classList.remove('active');
        });
        closeModal();
        alert('🌸 기본 8명의 학생 데이터로 초기화되었습니다!');
      }
    });
  }

  // ==========================================================================
  // 4. 과목 전환 (수학교육 vs 국어·인성교육) 탭 기능
  // ==========================================================================
  const subjectBtns = document.querySelectorAll('.subject-btn');
  const subjectPanels = document.querySelectorAll('.subject-content-panel');
  const avatarBadgeLeft = document.getElementById('avatarBadgeLeft');
  const avatarBadgeRight = document.getElementById('avatarBadgeRight');
  const currentSubjectTag = document.getElementById('currentSubjectTag');
  const floatingSymbols = document.querySelectorAll('.floating-symbol');

  const symbolsData = {
    math: ['∑', 'π', '∫', '∞', 'f(x)', 'Δ'],
    korean: ['시', '글', '말', '꽃', '훈', '📖'],
  };

  subjectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetSubject = btn.getAttribute('data-target');
      if (!targetSubject) return;

      subjectBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      subjectPanels.forEach((panel) => {
        if (panel.getAttribute('data-subject') === targetSubject) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });

      if (avatarBadgeLeft) {
        avatarBadgeLeft.textContent = targetSubject === 'math' ? '📐' : '📚';
      }
      if (avatarBadgeRight) {
        avatarBadgeRight.textContent = targetSubject === 'math' ? '✨' : '🌸';
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

  // ==========================================================================
  // 5. 스크롤 등장 애니메이션 (Intersection Observer)
  // ==========================================================================
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

  // ==========================================================================
  // 6. 부드러운 앵커 스크롤 이동
  // ==========================================================================
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
