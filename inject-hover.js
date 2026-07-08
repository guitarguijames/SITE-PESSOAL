const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// 1. Add group and cursor-default to timeline-item
content = content.replace(/class="timeline-item relative w-full opacity-0/g, 'class="timeline-item group cursor-default relative w-full opacity-0');

// 2. Add glow ring to timeline-dot
content = content.replace(/<div class="absolute inset-0 bg-\[#050505\] rounded-full"><\/div>/g, '<div class="absolute inset-0 bg-[#050505] rounded-full"></div>\n            <div class="absolute inset-2 rounded-full border border-orange-500/0 group-hover:border-orange-500/50 group-hover:scale-[1.8] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>');

// 3. Add hover to h3
content = content.replace(/<h3 class="text-2xl md:text-3xl font-medium text-white mb-2 tracking-tight">/g, '<h3 class="text-2xl md:text-3xl font-medium text-white group-hover:text-orange-400 transition-colors duration-500 mb-2 tracking-tight">');

// 4. Add hover to p (description)
content = content.replace(/<p class="text-sm md:text-base text-zinc-400 font-mono/g, '<p class="text-sm md:text-base text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500 font-mono');

// 5. Add hover to desktop numbers
content = content.replace(/<span class="text-xs text-orange-500 font-mono tracking-widest uppercase">0/g, '<span class="text-xs text-orange-500 font-mono tracking-widest uppercase transition-colors duration-500 group-hover:text-orange-300">0');

// 6. Add hover to mobile numbers
content = content.replace(/<span class="text-\[10px\] text-orange-500 font-mono tracking-widest uppercase">0/g, '<span class="text-[10px] text-orange-500 font-mono tracking-widest uppercase transition-colors duration-500 group-hover:text-orange-300">0');

// 7. Add translate transforms for Left items
content = content.replace(/<div class="w-full md:w-auto text-left md:text-right pl-24 md:pl-0">/g, '<div class="w-full md:w-auto text-left md:text-right pl-24 md:pl-0 transform transition-transform duration-500 group-hover:-translate-x-2">');
content = content.replace(/<div class="hidden md:block w-full md:w-auto text-left">/g, '<div class="hidden md:block w-full md:w-auto text-left transform transition-transform duration-500 group-hover:translate-x-2">');

// 8. Add translate transforms for Right items
content = content.replace(/<div class="hidden md:block w-full md:w-auto text-right">/g, '<div class="hidden md:block w-full md:w-auto text-right transform transition-transform duration-500 group-hover:-translate-x-2">');
content = content.replace(/<div class="w-full md:w-auto text-left pl-24 md:pl-0">/g, '<div class="w-full md:w-auto text-left pl-24 md:pl-0 transform transition-transform duration-500 group-hover:translate-x-2">');

fs.writeFileSync('index.html', content);
console.log('Done!');
