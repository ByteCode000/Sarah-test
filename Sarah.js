{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", function() \{\
    // Smooth scrolling for anchor links\
    const smoothScroll = (target) => \{\
        const element = document.querySelector(target);\
        window.scrollTo(\{\
            top: element.offsetTop - 50, // Adjusted for header height\
            behavior: "smooth"\
        \});\
    \};\
\
    // Scrollspy for navigation highlighting\
    const sections = document.querySelectorAll("section");\
    const navLinks = document.querySelectorAll("nav ul li a");\
\
    const highlightNavLink = () => \{\
        let index = sections.length;\
        while(--index && window.scrollY + 50 < sections[index].offsetTop) \{\}\
        navLinks.forEach((link) => link.classList.remove("active"));\
        navLinks[index].classList.add("active");\
    \};\
\
    window.addEventListener("scroll", highlightNavLink);\
\
    // Form validation\
    const form = document.querySelector("form");\
    form.addEventListener("submit", function(event) \{\
        event.preventDefault();\
        const name = document.getElementById("name").value;\
        const email = document.getElementById("email").value;\
        const message = document.getElementById("message").value;\
        \
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") \{\
            alert("Please fill out all fields.");\
        \} else \{\
            alert("Form submitted successfully!");\
            form.reset();\
        \}\
    \});\
\
    // Smooth scroll for anchor links\
    document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
        anchor.addEventListener('click', function(e) \{\
            e.preventDefault();\
            smoothScroll(this.getAttribute('href'));\
        \});\
    \});\
\});\
\
}