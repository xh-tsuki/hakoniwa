// JavaScript追加部分
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.content section');

    // タブクリック時の動作
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // デフォルトのアンカーリンクの動作を無効化

            // すべてのセクションを非表示にする
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 対応するセクションを表示する
            const targetId = this.getAttribute('href').substring(1); // "#tab1" の "#" を取り除く
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 初期状態でタブ1のコンテンツを表示
    document.getElementById('tab1').classList.add('active');
});
