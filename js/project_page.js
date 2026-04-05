document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const from = params.get('from');

    console.log('from:', JSON.stringify(from), 'length:', from.length);

    const backBtn = document.getElementById('back-btn');
    if (!backBtn) return; // safely bail if button missing

    if (from?.trim().toLowerCase() === 'main') {
        backBtn.href = '../main.html#projects';
    } else if (from?.trim().toLowerCase() === 'list') {
        backBtn.href = '../project_list.html';
    } else {
        backBtn.href = '../index.html';
    }
});