"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const slides = [
    {
        title: "Trabzon Pide",
        desc: "Karadeniz çizgisini taşıyan tereyağı dokunuşlu güçlü klasik.",
        image: "/images/menu/trabzon pide.png",
    },
    {
        title: "Kavurmalı Pide",
        desc: "Doyurucu iç harç, taş fırın hamuru ve sıcak servis dengesi.",
        image: "/images/menu/kavurmalı pide.png",
    },
    {
        title: "Kıymalı Pide",
        desc: "Emre Pide'nin en bilinen ürünlerinden biri; net, tanıdık ve güçlü tat.",
        image: "/images/menu/kıymalı.png",
    },
];

const SWIPE_THRESHOLD = 50;

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);

    // Touch / mouse drag state
    const dragState = useRef({
        isDragging: false,
        startX: 0,
        startY: 0,
        deltaX: 0,
        isHorizontal: null as boolean | null,
    });

    const goSlide = useCallback((n: number) => {
        setFade(false);
        setTimeout(() => {
            setCurrent(n);
            setFade(true);
        }, 200);
    }, []);

    const goNext = useCallback(() => {
        goSlide((current + 1) % slides.length);
    }, [current, goSlide]);

    const goPrev = useCallback(() => {
        goSlide((current - 1 + slides.length) % slides.length);
    }, [current, goSlide]);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % slides.length);
                setFade(true);
            }, 300);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    // Touch events
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onStart = (x: number, y: number) => {
            dragState.current = { isDragging: true, startX: x, startY: y, deltaX: 0, isHorizontal: null };
        };

        const onMove = (x: number, y: number) => {
            const state = dragState.current;
            if (!state.isDragging) return;
            state.deltaX = x - state.startX;

            // Determine swipe direction on first significant movement
            if (state.isHorizontal === null) {
                const deltaY = Math.abs(y - state.startY);
                const deltaX = Math.abs(state.deltaX);
                if (deltaX > 8 || deltaY > 8) {
                    state.isHorizontal = deltaX > deltaY;
                }
            }
        };

        const onEnd = () => {
            const state = dragState.current;
            if (!state.isDragging) return;
            state.isDragging = false;

            if (state.isHorizontal && Math.abs(state.deltaX) > SWIPE_THRESHOLD) {
                if (state.deltaX < 0) goNext();
                else goPrev();
            }
        };

        // Touch
        const handleTouchStart = (e: TouchEvent) => onStart(e.touches[0].clientX, e.touches[0].clientY);
        const handleTouchMove = (e: TouchEvent) => onMove(e.touches[0].clientX, e.touches[0].clientY);
        const handleTouchEnd = () => onEnd();

        // Mouse
        const handleMouseDown = (e: MouseEvent) => {
            e.preventDefault();
            onStart(e.clientX, e.clientY);
        };
        const handleMouseMove = (e: MouseEvent) => onMove(e.clientX, e.clientY);
        const handleMouseUp = () => onEnd();
        const handleMouseLeave = () => { if (dragState.current.isDragging) onEnd(); };

        el.addEventListener("touchstart", handleTouchStart, { passive: true });
        el.addEventListener("touchmove", handleTouchMove, { passive: true });
        el.addEventListener("touchend", handleTouchEnd);
        el.addEventListener("mousedown", handleMouseDown);
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseup", handleMouseUp);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("touchstart", handleTouchStart);
            el.removeEventListener("touchmove", handleTouchMove);
            el.removeEventListener("touchend", handleTouchEnd);
            el.removeEventListener("mousedown", handleMouseDown);
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseup", handleMouseUp);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [goNext, goPrev]);

    const slide = slides[current];

    return (
        <div ref={containerRef} className="hero-card select-none cursor-grab active:cursor-grabbing">
            {/* Üst ışık çizgisi */}
            <div className="absolute -top-px left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#f4d7a0]/40 to-transparent rounded-full" />

            {/* Slider görseli */}
            <div className="relative aspect-square overflow-hidden rounded-[24px] bg-[#2c1b14] pointer-events-none">
                <div className={`absolute inset-0 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain scale-105"
                        sizes="(max-width: 1024px) 340px, 460px"
                        priority
                        draggable={false}
                    />
                </div>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5 justify-center mt-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goSlide(i)}
                        className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${i === current
                                ? "w-9 bg-[#e8151a] shadow-[0_0_8px_rgba(232,21,26,0.7)]"
                                : "w-5 bg-white/15 hover:bg-white/25"
                            }`}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Bilgi */}
            <div className="mt-4 rounded-[20px] bg-white/6 px-5 py-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f4d7a0]">
                    Bugünün vurgusu
                </p>
                <h2
                    className={`mt-2 font-[family-name:var(--font-playfair)] text-[1.65rem] text-white leading-tight transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
                >
                    {slide.title}
                </h2>
                <p
                    className={`mt-1.5 text-[0.85rem] leading-7 text-white/58 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
                >
                    {slide.desc}
                </p>
            </div>
        </div>
    );
}
