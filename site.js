// Sample content, laid out to match MomentumRoot in the released native app.
const currentTasks = [['Call the dentist', false], ['Read 10 pages', false, true], ['Walk the dog', false], ['Plan the weekend', false], ['Drink a glass of water', true]];
const pastTasks = [['Plan the week', true], ['Clear my desk', true], ['Read a chapter', 'past'], ['Make time for a walk', 'past']];
const settingsIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M3 12h18M3 18h18"/><circle cx="15" cy="6" r="2" fill="#f2f2f0"/><circle cx="8" cy="12" r="2" fill="#f2f2f0"/><circle cx="15" cy="18" r="2" fill="#f2f2f0"/></svg>';
for (const el of document.querySelectorAll('[data-screen]')) {
  const history = el.dataset.screen === 'history';
  const names = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
  el.setAttribute('role','img');
  el.setAttribute('aria-label', `Foldover ${history ? 'past-day history' : 'weekly planner'} layout with sample tasks`);
  const days = names.map((day, index) => {
    const expanded = index === (history ? 0 : 1);
    const tasks = history ? pastTasks : currentTasks;
    const rows = expanded ? `<div class="native-tasks">${tasks.map(([title, state, recurring]) => `<div class="native-task ${state === true ? 'done' : state === 'past' ? 'past' : ''}"><i>${state === true ? '✓' : state === 'past' ? '−' : ''}</i><div><span>${title}</span>${state === 'past' ? '<small>Not completed</small>' : ''}</div>${recurring ? '<b class="repeat">⇄</b>' : ''}${history ? '' : '<b class="edit">╱</b>'}</div>`).join('')}</div>` : '';
    return `<div class="native-day ${expanded ? 'expanded' : ''}"><div class="native-day-heading"><strong>${day}</strong><small>Nov. ${23+index}</small><em>${expanded ? (history ? '2/4' : '1/5') : '0/2'}</em></div>${rows}</div>`;
  }).join('');
  el.innerHTML = `<div class="screen native-screen"><div class="status"><b>9:41</b><span>▮▮▮ ▰</span></div><div class="island"></div><div class="native-brand"><img src="assets/foldover.png" alt="">Foldover<span>${settingsIcon}</span></div><div class="native-input"><b>＋</b>Add for ${history ? 'Monday' : 'Tuesday'}…</div><div class="native-week">${days}</div><div class="home-bar"></div></div>`;
}
const sets=[[['☀','The busy morning','A little more clarity','Work, errands, a moment for yourself. Put it all in one place and pick the next thing that matters.'],['↗','The change of plans','A little more breathing room','Some days don’t go to plan. Unfinished tasks roll into tomorrow, while today’s record stays right where it belongs.']],[['✓','The small wins','A little more momentum','A cleared desk. A finished chapter. A call you meant to make. See the things you did, even on a busy day.'],['◷','The evening reset','A little more perspective','Look back at what you completed, see what carried forward, and leave tomorrow with a clear place to begin.']]];let storyIndex=0;function changeStories(){storyIndex=1-storyIndex;document.querySelector('.story-cards').innerHTML=sets[storyIndex].map(([icon,title,sub,copy])=>`<article class="story"><div class="story-head"><span class="avatar">${icon}</span><div><h3>${title}</h3><small>${sub}</small></div></div><p>${copy}</p></article>`).join('');}document.querySelectorAll('.arrows button').forEach(b=>b.addEventListener('click',changeStories));
