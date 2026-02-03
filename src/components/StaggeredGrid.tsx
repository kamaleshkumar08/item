import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

const StaggeredGrid = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const rows = 15;
    const cols = 25;
    const colors = ['#39ff14', '#f0f0f0', '#ffffff']; // Neon Green, Off-White, White

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        // Create grid cells
        grid.innerHTML = '';
        for (let i = 0; i < rows * cols; i++) {
            const cell = document.createElement('div');
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            cell.className = 'w-1.5 h-1.5 rounded-full cell transition-colors duration-300';
            cell.style.backgroundColor = randomColor;
            cell.style.opacity = '0.4';
            cell.dataset.index = i.toString();
            grid.appendChild(cell);
        }

        // Entrance animation
        animate('.cell', {
            scale: [0, 1],
            delay: stagger(20, { grid: [cols, rows], from: 'center' }),
            duration: 1500,
            easing: 'easeOutElastic(1, .8)',
        });
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const grid = gridRef.current;
        if (!grid) return;

        const rect = grid.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const cellWidth = rect.width / cols;
        const cellHeight = rect.height / rows;
        const col = Math.floor(x / cellWidth);
        const row = Math.floor(y / cellHeight);
        const index = row * cols + col;

        if (index >= 0 && index < rows * cols) {
            animate(`.cell:nth-child(${index + 1})`, {
                scale: [1, 2, 1],
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                duration: 600,
                easing: 'easeOutExpo'
            });
        }
    };

    const handleClick = (e: React.MouseEvent) => {
        const grid = gridRef.current;
        if (!grid) return;

        const rect = grid.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cellWidth = rect.width / cols;
        const cellHeight = rect.height / rows;
        const col = Math.floor(x / cellWidth);
        const row = Math.floor(y / cellHeight);
        const index = row * cols + col;

        animate('.cell', {
            scale: [
                { value: 0.1, easing: 'easeOutSine', duration: 500 },
                { value: 1, easing: 'easeOutElastic(1, .8)', duration: 1200 }
            ],
            backgroundColor: [
                { value: (el: any) => el.style.backgroundColor, duration: 0 },
                { value: colors[Math.floor(Math.random() * colors.length)], duration: 500 },
                { value: (el: any) => el.style.backgroundColor, duration: 1200 }
            ],
            loop: false,
            delay: stagger(50, {
                grid: [cols, rows],
                from: index
            })
        });
    };

    return (
        <div
            ref={gridRef}
            onClick={handleClick}
            onMouseMove={handleMouseMove}
            className="absolute inset-0 grid gap-4 place-items-center opacity-40 pointer-events-auto cursor-none group"
            style={{
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`
            }}
        />
    );
};

export default StaggeredGrid;
