    const movies = [
  {
    id: 1,
    title: "Captain America: The First Avenger",
    rating: "6.9",
    color: "#0d47a1",
    poster: "./assets/a.jpg",
    desc: "During World War II, Steve Rogers volunteers for an experiment that turns him into the super-soldier Captain America. Fighting Hydra and its villainous leader Red Skull, Steve becomes a beacon of hope and sacrifice. Frozen in ice after saving the world, he awakens decades later to a time that has forgotten him but still needs him."
  },
  {
    id: 2,
    title: "Captain Marvel",
    rating: "6.8",
    color: "#e53935",
    poster: "./assets/b.jpeg",
    desc: "Set in the 1990s, Carol Danvers becomes one of the universe’s most powerful heroes after Earth is caught in a galactic war between two alien races. With lost memories and a mysterious past, she must uncover who she truly is while embracing her destiny as Captain Marvel."
  },
  {
    id: 3,
    title: "Iron Man",
    rating: "7.9",
    color: "#b71c1c",
    poster: "./assets/3.jpeg",
    desc: "Billionaire genius Tony Stark is captured by terrorists and forced to build weapons. Instead, he creates the first Iron Man suit and escapes, dedicating himself to fighting those who misuse his inventions. With wit, arrogance, and brilliance, he becomes a modern legend."
  },
  {
    id: 4,
    title: "Iron Man 2",
    rating: "7.0",
    color: "#d32f2f",
    poster: "./assets/4.jpeg",
    desc: "After revealing his identity, Tony Stark faces government pressure and a vengeful rival armed with similar technology. As his health deteriorates and friendships strain, Tony learns that true heroism comes from within, not from the armor he wears."
  },
  {
    id: 5,
    title: "The Incredible Hulk",
    rating: "6.7",
    color: "#2e7d32",
    poster: "./assets/5.jpeg",
    desc: "On the run from the military, scientist Bruce Banner searches for a cure to his transformation into the Hulk. But when a new creature called the Abomination threatens innocent lives, Banner must embrace the monster within to save the world."
  },
  {
    id: 6,
    title: "Thor",
    rating: "7.0",
    color: "#1565c0",
    poster: "./assets/6.jpeg",
    desc: "The arrogant warrior Thor is banished from Asgard and stripped of his power. Living among humans, he learns humility and love. But when his brother Loki endangers Earth, Thor must reclaim Mjölnir and his place among the gods."
  },
  {
    id: 7,
    title: "The Avengers",
    rating: "8.0",
    color: "#4a148c",
    poster: "./assets/7.jpeg",
    desc: "When Loki threatens Earth with an alien army, Nick Fury unites Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye. Despite their differences, they learn to fight as one, forming the Avengers and saving humanity from annihilation."
  },
  {
    id: 8,
    title: "Iron Man 3",
    rating: "7.1",
    color: "#d32f2f",
    poster: "./assets/8.jpeg",
    desc: "Haunted by his experiences, Tony Stark isolates himself in his technology. When a terrorist known as the Mandarin destroys his world, Tony must rebuild from nothing and prove that the man defines the suit—not the other way around."
  },
  {
    id: 9,
    title: "Thor: The Dark World",
    rating: "6.8",
    color: "#512da8",
    poster: "./assets/9.jpeg",
    desc: "An ancient force known as the Dark Elves seeks to plunge the universe into shadow. Thor must form an uneasy alliance with Loki to protect Asgard and Earth from destruction, facing loss and betrayal along the way."
  },
  {
    id: 10,
    title: "Captain America: The Winter Soldier",
    rating: "7.7",
    color: "#0288d1",
    poster: "./assets/10.jpeg",
    desc: "Now a modern hero, Steve Rogers faces a mysterious assassin called the Winter Soldier while uncovering a Hydra conspiracy within S.H.I.E.L.D. Trust is shattered, and Steve must decide what it means to truly fight for freedom."
  },
  {
    id: 11,
    title: "Guardians of the Galaxy",
    rating: "8.0",
    color: "#00796b",
    poster: "./assets/11.jpeg",
    desc: "A group of intergalactic outlaws — Star-Lord, Gamora, Drax, Rocket, and Groot — must unite to protect a cosmic orb of unimaginable power. Through humor, chaos, and unexpected friendship, they become the unlikeliest heroes of the galaxy."
  },
  {
    id: 12,
    title: "Guardians of the Galaxy Vol. 2",
    rating: "7.6",
    color: "#6a1b9a",
    poster: "./assets/12.jpeg",
    desc: "As Peter Quill meets his celestial father, Ego, the Guardians struggle with family, loyalty, and identity. In a cosmic adventure filled with emotion and heart, they learn that love makes a family stronger than any bloodline."
  },
  {
    id: 13,
    title: "Avengers: Age of Ultron",
    rating: "7.3",
    color: "#c62828",
    poster: "../assets/13.jpeg",
    desc: "Tony Stark’s creation, Ultron, becomes a sentient threat determined to eradicate humanity. As the Avengers fight to save the world, they face their own fears and question the cost of their mission."
  },
  {
    id: 14,
    title: "Ant-Man",
    rating: "7.3",
    color: "#2e7d32",
    poster: "./assets/14.jpeg",
    desc: "Ex-con Scott Lang becomes the small but mighty Ant-Man under Hank Pym’s mentorship. With humor and heart, he must pull off a heist that will save the world on a microscopic scale."
  },
  {
    id: 15,
    title: "Captain America: Civil War",
    rating: "7.8",
    color: "#0277bd",
    poster: "./assets/15.jpeg",
    desc: "The Avengers divide when government oversight splits them into two factions led by Captain America and Iron Man. As heroes battle each other, friendships shatter and consequences ripple across the world."
  },
  {
    id: 16,
    title: "Black Widow",
    rating: "6.8",
    color: "#b71c1c",
    poster: "./assets/16.jpeg",
    desc: "Natasha Romanoff confronts her dark past as she reunites with her old family of spies. Facing the Red Room that made her, she fights to end the cycle of manipulation and find redemption."
  },
  {
    id: 17,
    title: "Black Panther",
    rating: "7.3",
    color: "#4a148c",
    poster: "./assets/17.jpeg",
    desc: "After his father’s death, T’Challa returns to Wakanda to claim his throne. When a rival challenges his rule, he must balance tradition and progress to protect his people and their future."
  },
  {
    id: 18,
    title: "Spider-Man: Homecoming",
    rating: "7.4",
    color: "#d32f2f",
    poster: "./assets/18.jpeg",
    desc: "Peter Parker tries to balance high school life with his role as Spider-Man. When the Vulture threatens New York, Peter learns that being a hero isn’t about recognition—it’s about responsibility."
  },
  {
    id: 19,
    title: "Doctor Strange",
    rating: "7.5",
    color: "#512da8",
    poster: "./assets/19.jpeg",
    desc: "After losing his hands in a car accident, arrogant surgeon Stephen Strange seeks healing in the mystic arts. Facing dark forces beyond imagination, he learns that true power comes from selflessness and wisdom."
  },
  {
    id: 20,
    title: "Thor: Ragnarok",
    rating: "7.9",
    color: "#ff8f00",
    poster: "./assets/20.jpeg",
    desc: "Imprisoned on a distant world, Thor must race to prevent Ragnarok — the destruction of Asgard. Alongside Hulk and new allies, he faces Hela, the goddess of death, in a colorful battle of gods."
  },
  {
    id: 21,
    title: "Ant-Man and the Wasp",
    rating: "7.0",
    color: "#00796b",
    poster: "./assets/21.jpeg",
    desc: "Scott Lang and Hope van Dyne team up to rescue Hope’s mother from the Quantum Realm. With humor, science, and teamwork, they prove that heroism can come in any size."
  },
  {
    id: 22,
    title: "Avengers: Infinity War",
    rating: "8.4",
    color: "#6a1b9a",
    poster: "./assets/22.jpeg",
    desc: "The Avengers and Guardians unite to stop Thanos from collecting the Infinity Stones. Worlds collide as heroes fall, sacrifices are made, and the universe changes forever."
  },
  {
    id: 23,
    title: "Avengers: Endgame",
    rating: "8.4",
    color: "#1a237e",
    poster: "./assets/23.jpeg",
    desc: "After Thanos’ snap, the surviving heroes embark on a desperate mission to reverse time and restore life. Through sacrifice and courage, they face their final battle together, ending an era of heroism."
  },
  {
    id: 24,
    title: "Shang-Chi and the Legend of the Ten Rings",
    rating: "7.4",
    color: "#00695c",
    poster: "./assets/24.jpeg",
    desc: "Shang-Chi, a martial artist hiding in San Francisco, is drawn into his father’s mysterious organization. To confront his destiny, he must master ancient powers and face his family’s legacy."
  },
  {
    id: 25,
    title: "Eternals",
    rating: "6.8",
    color: "#4a148c",
    poster: "./assets/25.jpeg",
    desc: "Immortal beings known as Eternals reunite after centuries to protect humanity from their ancient enemies. Torn between duty and emotion, they confront the meaning of creation and love."
  },
  {
    id: 26,
    title: "Spider-Man: Far From Home",
    rating: "7.5",
    color: "#c62828",
    poster: "./assets/26.jpeg",
    desc: "Peter Parker’s school trip to Europe turns chaotic when illusions blur reality. Facing the manipulative Mysterio, Peter must define what it means to be the next Iron Man."
  },
  {
    id: 27,
    title: "Spider-Man: No Way Home",
    rating: "8.3",
    color: "#b71c1c",
    poster: "./assets/27.jpeg",
    desc: "When Peter’s identity is exposed, a spell gone wrong opens the multiverse. Villains from other realities appear, and three generations of Spider-Men unite to heal their worlds."
  },
  {
    id: 28,
    title: "Doctor Strange in the Multiverse of Madness",
    rating: "6.9",
    color: "#512da8",
    poster: "./assets/28.jpeg",
    desc: "Doctor Strange journeys across alternate realities to protect a young girl pursued by a corrupted Wanda Maximoff. In his darkest trial yet, he learns the cost of controlling destiny."
  },
  {
    id: 29,
    title: "Thor: Love and Thunder",
    rating: "6.6",
    color: "#e53935",
    poster: "./assets/29.jpeg",
    desc: "Thor’s search for peace is interrupted by Gorr the God Butcher. Reunited with Jane Foster, now the Mighty Thor, he learns that love and loss are the strongest forces in the universe."
  },
  {
    id: 30,
    title: "Black Panther: Wakanda Forever",
    rating: "7.2",
    color: "#283593",
    poster: "./assets/30.jpeg",
    desc: "In the wake of King T’Challa’s death, Shuri and her people fight to defend Wakanda from new threats. Through grief and unity, a new protector rises to honor his legacy."
  },
  {
  id: 31,
  title: "Ant-Man and the Wasp: Quantumania",
  rating: "6.2",
  color: "#00897b",
  poster: "./assets/31.jpeg",
  desc: "Scott Lang and Hope van Dyne, along with Hank Pym and Janet, are pulled into the Quantum Realm — a strange, hidden universe beneath their own. There, they face Kang the Conqueror, a time-warping warlord whose power threatens all timelines. As secrets unravel, Scott must make an impossible choice between saving his family and protecting the multiverse from destruction."
},
{
  id: 32,
  title: "Guardians of the Galaxy Vol. 3",
  rating: "8.0",
  color: "#4a148c",
  poster: "./assets/32.jpeg",
  desc: "The Guardians embark on their most emotional mission yet as Rocket’s tragic origin comes to light. While the team faces the ruthless High Evolutionary, Peter Quill must rally his friends to protect the only family he has left. It’s a story of grief, redemption, and found family — a heartfelt farewell to the misfits who saved the galaxy."
},
{
  id: 33,
  title: "The Marvels",
  rating: "6.0",
  color: "#e53935",
  poster: "./assets/33.jpeg",
  desc: "When Carol Danvers’ powers become entangled with those of Kamala Khan and Monica Rambeau, the three heroines must learn to work together to save the universe from an interdimensional threat. Their unexpected connection leads to a cosmic adventure filled with humor, teamwork, and heart as they discover the strength that comes from unity."
},
{
  id: 34,
  title: "Deadpool & Wolverine",
  rating: "8.2",
  color: "#c62828",
  poster: "./assets/34.jpeg",
  desc: "Deadpool’s chaotic life takes a multiversal twist when he crosses paths with a reluctant Wolverine. Forced to team up against a reality-breaking threat, the unlikely duo delivers brutal fights, sharp humor, and surprising emotional depth. Their clash of personalities turns into an unforgettable, universe-altering journey filled with blood, banter, and redemption."
}


]
;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const movie = movies.find(m => m.id === id);

    if (movie) {
      document.body.style.background = `linear-gradient(180deg, ${movie.color}, #000)`;
      document.getElementById('poster').src = movie.poster;
      document.getElementById('title').textContent = movie.title;
      document.getElementById('rating').textContent = `⭐ ${movie.rating}`;
      document.getElementById('desc').textContent = movie.desc;
    } else {
      document.body.innerHTML = "<h2>Film bulunamadı!</h2>";
    }
