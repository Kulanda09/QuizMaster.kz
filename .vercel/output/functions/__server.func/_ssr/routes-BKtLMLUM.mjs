import { C as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SUBJECTS } from "./catalog-CNe7wnVA.mjs";
import { n as Shell, r as useCurrentUser } from "./shell-cbVMAzSL.mjs";
import { n as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BKtLMLUM.js
var import_jsx_runtime = require_jsx_runtime();
var ORBITS = [
	{
		label: "MATH",
		tone: "text-signal"
	},
	{
		label: "IT",
		tone: "text-gold"
	},
	{
		label: "KZ",
		tone: "text-signal"
	},
	{
		label: "EN",
		tone: "text-gold"
	}
];
function Scene() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "scene-drift relative mx-auto h-80 w-full max-w-md",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			style: { perspective: "1100px" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scene-spin absolute left-1/2 top-1/2 h-40 w-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cube-face cube-front border-2 border-signal bg-signal text-signal-ink",
						children: "∑"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cube-face cube-back border-2 border-gold bg-gold text-signal-ink",
						children: "{ }"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cube-face cube-right border-2 border-signal bg-panel-2 text-signal",
						children: "01"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cube-face cube-left border-2 border-gold bg-panel text-gold",
						children: "10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cube-face cube-top border-2 border-signal bg-signal/30 text-fg",
						children: "IT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cube-face cube-bottom border-2 border-gold bg-panel-2 text-gold",
						children: "Q"
					}),
					ORBITS.map((face, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `absolute left-1/2 top-1/2 grid h-14 w-20 place-items-center rounded-xl border border-line bg-panel font-mono text-xs font-semibold ${face.tone}`,
						style: { transform: `translate(-50%, -50%) rotateY(${index * 90}deg) translateZ(168px)` },
						children: face.label
					}, face.label))
				]
			})
		})
	});
}
function Home() {
	const user = useCurrentUser();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-[0.28em] text-signal",
				children: "IT БӨЛІМІ · QUIZ LAB"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl",
				children: "Білімді өлше. Нәтижені сақта."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-lg text-lg leading-relaxed text-muted",
				children: "QuizMaster — математика, информатика, Қазақстан тарихы және ағылшын тілі бойынша қысқа кәсіби тесттер. Тіркеліп, әр әрекетті жеке кабинетте көріңіз."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#subjects",
					className: "inline-flex h-12 items-center rounded-full bg-signal px-6 font-semibold text-signal-ink",
					children: "Пәнді таңдау"
				}), !user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "inline-flex h-12 items-center rounded-full border border-line px-6 font-semibold text-fg",
					children: "Тіркелу"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/cabinet",
					className: "inline-flex h-12 items-center rounded-full border border-line px-6 font-semibold text-fg",
					children: "Менің нәтижелерім"
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, {})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "subjects",
		className: "mx-auto max-w-6xl px-4 pb-20 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Төрт бағыт"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs text-muted",
				children: "8 сұрақ · бір әрекет"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: SUBJECTS.map((subject) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/quiz/$subject",
				params: { subject: subject.id },
				className: "group rounded-card border border-line bg-panel p-6 transition-transform duration-200 hover:-translate-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs tracking-[0.2em] text-signal",
							children: subject.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 text-2xl font-semibold",
						children: subject.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: subject.blurb
					})
				]
			}, subject.id))
		})]
	})] });
}
//#endregion
export { Home as component };
