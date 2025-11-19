import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: "en", label: "EN", flag: "🇺🇸" },
        { code: "es", label: "ES", flag: "🇪🇸" },
        { code: "pt", label: "PT", flag: "🇧🇷" },
    ];

    const currentLang = languages.find((lang) => i18n.language?.startsWith(lang.code)) || languages[0];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="language-switcher" ref={dropdownRef} style={{ position: "relative", marginLeft: "20px" }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: "transparent",
                    border: "1px solid var(--color-secondary)",
                    borderRadius: "20px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                }}
            >
                <span>{currentLang.flag}</span>
                <span style={{ fontWeight: "600" }}>{currentLang.label}</span>
                <span style={{ fontSize: "0.8rem", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▼</span>
            </button>

            {isOpen && (
                <ul
                    style={{
                        position: "absolute",
                        top: "120%",
                        right: 0,
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-light)",
                        borderRadius: "8px",
                        boxShadow: "var(--shadow-md)",
                        padding: "5px 0",
                        margin: 0,
                        listStyle: "none",
                        zIndex: 1000,
                        minWidth: "100px",
                    }}
                >
                    {languages.map((lang) => (
                        <li key={lang.code}>
                            <button
                                onClick={() => changeLanguage(lang.code)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    width: "100%",
                                    padding: "8px 15px",
                                    textAlign: "left",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    color: i18n.language?.startsWith(lang.code) ? "var(--color-secondary)" : "var(--color-text-main)",
                                    fontWeight: i18n.language?.startsWith(lang.code) ? "600" : "400",
                                }}
                            >
                                <span>{lang.flag}</span>
                                <span>{lang.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSwitcher;
