/**
 * AI個人開発実験 — DayXXX メインロジック
 *
 * このファイルを各Dayのツールロジックに置き換えてください。
 * テンプレートとして、入力→変換→出力の基本フローを実装しています。
 */

import './style.css';

const actionBtn = document.getElementById('actionBtn');
const toolInput = document.getElementById('toolInput');
const toolOutput = document.getElementById('toolOutput');
const outputGroup = document.getElementById('outputGroup');

actionBtn.addEventListener('click', () => {
    const input = toolInput.value.trim();

    if (!input) {
        showOutput('⚠ 入力を入れてください', 'warning');
        return;
    }

    // ============================================
    // ▼ ここにツールのロジックを実装 ▼
    // ============================================
    const result = processInput(input);
    // ============================================

    showOutput(result, 'success');
});

/**
 * ツールのメイン処理
 * 各Dayでこの関数を置き換える
 */
function processInput(input) {
    // テンプレートのデモ: 文字数カウント
    const charCount = input.length;
    const wordCount = input.split(/\s+/).filter(Boolean).length;
    const lineCount = input.split('\n').length;

    return `📊 分析結果:
  文字数: ${charCount}
  単語数: ${wordCount}
  行数: ${lineCount}`;
}

/**
 * 出力を表示
 */
function showOutput(content, type = 'info') {
    outputGroup.style.display = '';
    toolOutput.className = `output-area output-${type}`;
    toolOutput.textContent = content;

    // アニメーション
    outputGroup.style.animation = 'none';
    outputGroup.offsetHeight; // reflow
    outputGroup.style.animation = 'fadeSlideIn 0.3s ease';
}
