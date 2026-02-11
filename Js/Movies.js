const movies = [
  {
    id: 1,
    title: "Captain America: The First Avenger",
    rating: "6.9 ⭐",
    desc: "Steve Rogers becomes a super soldier during World War II.",
    color: "#0a6b4a",
    poster: "./assets/a.jpg",
  },
  {
    id: 2,
    title: "Captain Marvel",
    rating: "6.7 ⭐",
    desc: "In the Kree–Skrull war, the fate of the galaxy lies in one woman’s hands.",
    color: "#1976d2",
    poster: "./assets/b.jpeg"
  },
  {
    id: 3,
    title: "Iron Man",
    rating: "7.9 ⭐",
    desc: "The story of Tony Stark’s transformation into Iron Man.",
    color: "#c62828",
    poster: "./assets/3.jpeg"
  },
  {
    id: 4,
    title: "Iron Man 2",
    rating: "7.0 ⭐",
    desc: "As Iron Man’s identity is revealed, new enemies emerge.",
    color: "#ad1457",
    poster: "./assets/4.jpeg"
  },
  {
    id: 5,
    title: "The Incredible Hulk",
    rating: "6.6 ⭐",
    desc: "A scientist loses control after an experiment goes wrong.",
    color: "#388e3c",
    poster: "./assets/5.jpeg"
  },
  {
    id: 6,
    title: "Thor",
    rating: "7.0 ⭐",
    desc: "The prince of Asgard is banished to Earth to learn true heroism.",
    color: "#1565c0",
    poster: "./assets/6.jpeg"
  },
  {
    id: 7,
    title: "The Avengers",
    rating: "8.0 ⭐",
    desc: "Earth’s mightiest heroes unite to fight Loki.",
    color: "#f57c00",
    poster: "./assets/7.jpeg"
  },
  {
    id: 8,
    title: "Iron Man 3",
    rating: "7.1 ⭐",
    desc: "Tony Stark faces new threats while dealing with his inner trauma.",
    color: "#d32f2f",
    poster: "./assets/8.jpeg"
  },
  {
    id: 9,
    title: "Thor: The Dark World",
    rating: "6.8 ⭐",
    desc: "Thor battles Malekith, who seeks to plunge the universe into darkness.",
    color: "#512da8",
    poster: "./assets/9.jpeg"
  },
  {
    id: 10,
    title: "Captain America: The Winter Soldier",
    rating: "7.7 ⭐",
    desc: "Steve Rogers finds himself caught in a web of conspiracy.",
    color: "#0288d1",
    poster: "./assets/10.jpeg"
  },
  {
    id: 11,
    title: "Guardians of the Galaxy",
    rating: "8.0 ⭐",
    desc: "A group of misfits unite to save the galaxy.",
    color: "#00796b",
    poster: "./assets/11.jpeg"
  },
  {
    id: 12,
    title: "Guardians of the Galaxy Vol. 2",
    rating: "7.6 ⭐",
    desc: "As Peter Quill faces his past, the team grows closer.",
    color: "#6a1b9a",
    poster: "./assets/12.jpeg"
  },
  {
    id: 13,
    title: "Avengers: Age of Ultron",
    rating: "7.3 ⭐",
    desc: "Iron Man’s AI goes rogue, putting humanity in danger.",
    color: "#c62828",
    poster: "./assets/13.jpeg"
  },
  {
    id: 14,
    title: "Ant-Man",
    rating: "7.3 ⭐",
    desc: "A hero who shrinks to fight giant problems.",
    color: "#2e7d32",
    poster: "./assets/14.jpeg"
  },
  {
    id: 15,
    title: "Captain America: Civil War",
    rating: "7.8 ⭐",
    desc: "The Avengers split into two teams: Iron Man vs. Captain America.",
    color: "#0277bd",
    poster: "./assets/15.jpeg"
  },
  {
    id: 16,
    title: "Black Widow",
    rating: "6.8 ⭐",
    desc: "Natasha Romanoff confronts her past.",
    color: "#b71c1c",
    poster: "./assets/16.jpeg"
  },
  {
    id: 17,
    title: "Black Panther",
    rating: "7.3 ⭐",
    desc: "King T’Challa must defend his throne in Wakanda.",
    color: "#4a148c",
    poster: "./assets/17.jpeg"
  },
  {
    id: 18,
    title: "Spider-Man: Homecoming",
    rating: "7.4 ⭐",
    desc: "Young Peter Parker learns the ropes of heroism under Iron Man’s guidance.",
    color: "#d32f2f",
    poster: "./assets/18.jpeg"
  },
  {
    id: 19,
    title: "Doctor Strange",
    rating: "7.5 ⭐",
    desc: "A surgeon embarks on a mystical journey after a tragic accident.",
    color: "#512da8",
    poster: "./assets/19.jpeg"
  },
  {
    id: 20,
    title: "Thor: Ragnarok",
    rating: "7.9 ⭐",
    desc: "Thor faces Hela in a battle that will decide the fate of the universe.",
    color: "#ff8f00",
    poster: "./assets/20.jpeg"
  },
  {
    id: 21,
    title: "Ant-Man and the Wasp",
    rating: "7.0 ⭐",
    desc: "New adventures and dangers await in the quantum realm.",
    color: "#00796b",
    poster: "./assets/21.jpeg"
  },
  {
    id: 22,
    title: "Avengers: Infinity War",
    rating: "8.4 ⭐",
    desc: "Thanos is determined to collect all the Infinity Stones.",
    color: "#6a1b9a",
    poster: "./assets/22.jpeg"
  },
  {
    id: 23,
    title: "Avengers: Endgame",
    rating: "8.4 ⭐",
    desc: "The final battle for the fate of the universe begins.",
    color: "#1a237e",
    poster: "./assets/23.jpeg"
  },
  {
    id: 24,
    title: "Shang-Chi and the Legend of the Ten Rings",
    rating: "7.4 ⭐",
    desc: "The power of the mysterious Ten Rings is revealed.",
    color: "#00695c",
    poster: "./assets/24.jpeg"
  },
  {
    id: 25,
    title: "Eternals",
    rating: "6.3 ⭐",
    desc: "Immortal beings hidden for millennia rise to protect humanity.",
    color: "#5d4037",
    poster: "./assets/25.jpeg"
  },
  {
    id: 26,
    title: "Spider-Man: Far From Home",
    rating: "7.4 ⭐",
    desc: "Peter faces a new threat while traveling across Europe.",
    color: "#c62828",
    poster: "./assets/26.jpeg"
  },
  {
    id: 27,
    title: "Spider-Man: No Way Home",
    rating: "8.3 ⭐",
    desc: "When the multiverse opens, old enemies return.",
    color: "#ad1457",
    poster: "./assets/27.jpeg"
  },
  {
    id: 28,
    title: "Doctor Strange in the Multiverse of Madness",
    rating: "7.0 ⭐",
    desc: "Strange faces the dark side of parallel universes.",
    color: "#512da8",
    poster: "./assets/28.jpeg"
  },
  {
    id: 29,
    title: "Thor: Love and Thunder",
    rating: "6.2 ⭐",
    desc: "Thor must choose between love and war.",
    color: "#ef6c00",
    poster: "./assets/29.jpeg"
  },
  {
    id: 30,
    title: "Black Panther: Wakanda Forever",
    rating: "7.1 ⭐",
    desc: "Wakanda faces new threats after the loss of its king.",
    color: "#4a148c",
    poster: "./assets/30.jpeg"
  },
  {
    id: 31,
    title: "Ant-Man and the Wasp: Quantumania",
    rating: "6.1 ⭐",
    desc: "The threat of Kang grows within the quantum realm.",
    color: "#2e7d32",
    poster: "./assets/31.jpeg"
  },
  {
    id: 32,
    title: "Guardians of the Galaxy Vol. 3",
    rating: "8.0 ⭐",
    desc: "The team reunites one last time to face their past.",
    color: "#6a1b9a",
    poster: "./assets/32.jpeg"
  },
  {
    id: 33,
    title: "The Marvels",
    rating: "6.0 ⭐",
    desc: "Carol, Kamala, and Monica join forces to save the universe.",
    color: "#0288d1",
    poster: "./assets/33.jpeg"
  },
  {
    id: 34,
    title: "Deadpool & Wolverine",
    rating: "8.2 ⭐",
    desc: "Two anti-heroes team up in a multiverse of madness.",
    color: "#b71c1c",
    poster: "./assets/34.jpeg"
  }
];

    const results = document.getElementById('results');
    const empty = document.getElementById('empty');
    const input = document.getElementById('q');

    function svgPoster(title, color){
      const w = 440, h = 660;
      const escaped = title.replace(/&/g, '&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      const svg = `<?xml version='1.0' encoding='utf-8'?>
<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
  <defs>
    <linearGradient id='g' x1='0' x2='1'>
      <stop offset='0' stop-color='${color}' stop-opacity='1' />
      <stop offset='1' stop-color='#000000' stop-opacity='1' />
    </linearGradient>
  </defs>
  <rect width='100%' height='100%' fill='url(#g)' />
  <g transform='translate(30,480)'>
    <text x='0' y='0' font-family='Arial' font-weight='700' font-size='42' fill='white'>${escaped.split(' ').slice(0,3).join(' ')}</text>
  </g>
</svg>`;
      return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }

    function render(list){
      results.innerHTML = '';
      if(!list.length){
        empty.style.display = 'block';
        return;
      }
      empty.style.display = 'none';

      list.forEach((m, idx) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
    if (m.link) {
        window.location.href = m.link;
    } 
    else {
    window.location.href = `details.html?id=${m.id}`;
    }
    });

        const posterWrap = document.createElement('div');
        posterWrap.className = 'poster-wrap';
        posterWrap.style.animationDelay = (idx * 80) + 'ms';

        const img = document.createElement('img');
        img.alt = m.title + ' poster';
        img.src = m.poster ? m.poster : svgPoster(m.title, m.color || '#333');

        const rating = document.createElement('div');
        rating.className = 'rating';
        rating.textContent = m.rating || '—';

        posterWrap.appendChild(img);
        posterWrap.appendChild(rating);

        const meta = document.createElement('div');
        meta.className = 'meta';
        meta.style.animationDelay = (idx * 40) + 'ms';

        const h = document.createElement('h3');
        h.className = 'title';
        h.textContent = m.title;

        const d = document.createElement('p');
        d.className = 'desc';
        d.textContent = m.desc;

        const tags = document.createElement('div');
        tags.className = 'tags';
        const t1 = document.createElement('span'); t1.className='tag'; t1.textContent = 'Marvel';
        const t2 = document.createElement('span'); t2.className='tag'; t2.textContent = 'Movie';
        tags.appendChild(t1); tags.appendChild(t2);

        meta.appendChild(h);
        meta.appendChild(d);
        meta.appendChild(tags);

        card.appendChild(posterWrap);
        card.appendChild(meta);

        results.appendChild(card);
      });
    }

    render(movies);

    input.addEventListener('input', (e)=>{
      const q = e.target.value.trim().toLowerCase();
      const filtered = movies.filter(m => (m.title + ' ' + m.desc).toLowerCase().includes(q));
      render(filtered);
    });

    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape'){
        input.value = '';
        render(movies);
      }
    });