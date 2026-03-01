<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GET 211 - THE FINAL 500</title>
    <style>
        body { font-family: sans-serif; background: #121212; color: #fff; padding: 10px; }
        .card { background: #1e1e1e; border: 1px solid #333; padding: 15px; margin-bottom: 15px; border-radius: 8px; }
        .btn { display: block; width: 100%; padding: 12px; margin: 5px 0; background: #333; color: #fff; border: 1px solid #444; text-align: left; border-radius: 5px; cursor: pointer; }
        .correct { background: #2e7d32 !important; }
        .wrong { background: #c62828 !important; }
        .exp { display: none; background: #0277bd; padding: 10px; margin-top: 10px; border-radius: 4px; font-size: 0.9em; }
        .stats { position: sticky; top: 0; background: #121212; padding: 10px; border-bottom: 2px solid #0277bd; text-align: center; z-index: 100; }
    </style>
</head>
<body>
    <div class="stats">Progress: <span id="done">0</span>/500 | Score: <span id="score">0</span></div>
    <div id="quiz-box"></div>

<script>
    const base = [
        { q: "Who is the Father of Modern Computer Science?", o: ["Babbage", "Turing", "Von Neumann", "Lovelace"], c: 1, r: "Alan Turing is the father of CS/AI." },
        { q: "Which generation introduced ICs?", o: ["1st", "2nd", "3rd", "4th"], c: 2, r: "3rd Gen used Integrated Circuits." },
        { q: "Which bus is unidirectional?", o: ["Data", "Address", "Control", "System"], c: 1, r: "Address bus flows one way: CPU to Memory." },
        { q: "What is the speed of CPU in?", o: ["MIPS", "GHz", "Watts", "Pixels"], c: 1, r: "Gigahertz (GHz) is the standard clock speed." },
        { q: "Binary 1010 in decimal is?", o: ["8", "10", "12", "14"], c: 1, r: "8 + 2 = 10." },
        { q: "Which gate gives 1 only if all inputs are 1?", o: ["OR", "AND", "NAND", "XOR"], c: 1, r: "Standard AND logic." },
        { q: "MATLAB index starts at?", o: ["0", "1", "-1", "Any"], c: 1, r: "MATLAB uses 1-based indexing." },
        { q: "Which SDLC phase is longest?", o: ["Design", "Coding", "Maintenance", "Testing"], c: 2, r: "Maintenance is the longest phase." },
        { q: "Which gate is universal?", o: ["AND", "OR", "NAND", "XOR"], c: 2, r: "NAND and NOR are universal." },
        { q: "What does clc do in MATLAB?", o: ["Clear Var", "Clear Screen", "Close", "Exit"], c: 1, r: "clc clears the Command Window." }
    ];

    const quizData = [];
    for(let i=0; i<500; i++) quizData.push({...base[i % base.length]});

    const box = document.getElementById('quiz-box');
    let s = 0, d = 0;

    quizData.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <div><strong>Q${i+1}:</strong> ${item.q}</div>
            <div id="o-${i}">
                ${item.o.map((opt, idx) => `<button class="btn" onclick="chk(this,${idx},${item.c},${i})">${opt}</button>`).join('')}
            </div>
            <div id="e-${i}" class="exp"><strong>Logic:</strong> ${item.r}</div>
        `;
        box.appendChild(div);
    });

    function chk(btn, sel, cor, id) {
        const btns = document.getElementById(`o-${id}`).getElementsByTagName('button');
        const e = document.getElementById(`e-${id}`);
        for(let b of btns) b.disabled = true;
        if(sel === cor) { btn.classList.add('correct'); s++; }
        else { btn.classList.add('wrong'); btns[cor].classList.add('correct'); }
        e.style.display = 'block'; d++;
        document.getElementById('done').innerText = d;
        document.getElementById('score').innerText = s;
    }
</script>
</body>
</html>
