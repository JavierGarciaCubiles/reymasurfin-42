
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Career-focused motivational colors
				career: {
					primary: 'hsl(var(--career-primary))',
					secondary: 'hsl(var(--career-secondary))',
					accent: 'hsl(var(--career-accent))',
					success: 'hsl(var(--career-success))',
					glow: 'hsl(var(--career-glow))',
				},
				// New color palette
				palette: {
					'ghost-white': 'hsl(var(--palette-ghost-white))',
					green: 'hsl(var(--palette-green))',
					'dark-green': 'hsl(var(--palette-dark-green))',
					yellow: 'hsl(var(--palette-yellow))',
					blue: 'hsl(var(--palette-blue))',
				},
				// Enhanced Reymasur colors with new palette
				reymasur: {
					green: {
						50: 'hsl(139, 64%, 97%)',
						100: 'hsl(139, 64%, 92%)',
						200: 'hsl(139, 64%, 85%)',
						300: 'hsl(139, 64%, 75%)',
						400: 'hsl(139, 64%, 60%)',
						500: 'hsl(139, 64%, 40%)', // Main green from palette
						600: 'hsl(139, 64%, 35%)',
						700: 'hsl(139, 64%, 30%)',
						800: 'hsl(139, 64%, 25%)',
						900: 'hsl(139, 64%, 20%)',
					},
					blue: {
						50: 'hsl(200, 73%, 97%)',
						100: 'hsl(200, 73%, 92%)',
						200: 'hsl(200, 73%, 85%)',
						300: 'hsl(200, 73%, 75%)',
						400: 'hsl(200, 73%, 60%)',
						500: 'hsl(200, 73%, 20%)', // Main blue from palette
						600: 'hsl(200, 73%, 18%)',
						700: 'hsl(200, 73%, 15%)',
						800: 'hsl(200, 73%, 12%)',
						900: 'hsl(200, 73%, 10%)',
					},
					corporate: {
						50: 'hsl(200, 73%, 97%)',
						100: 'hsl(200, 73%, 94%)',
						200: 'hsl(200, 73%, 87%)',
						300: 'hsl(200, 73%, 77%)',
						400: 'hsl(200, 73%, 65%)',
						500: 'hsl(200, 73%, 20%)', // Main blue from palette
						600: 'hsl(200, 73%, 18%)',
						700: 'hsl(200, 73%, 15%)',
						800: 'hsl(200, 73%, 12%)',
						900: 'hsl(200, 73%, 10%)',
					},
					accent: {
						50: 'hsl(53, 87%, 97%)',
						100: 'hsl(53, 87%, 93%)',
						200: 'hsl(53, 87%, 85%)',
						300: 'hsl(53, 87%, 75%)',
						400: 'hsl(53, 87%, 65%)',
						500: 'hsl(53, 87%, 56%)', // Main yellow from palette
						600: 'hsl(53, 87%, 45%)',
						700: 'hsl(53, 87%, 35%)',
						800: 'hsl(53, 87%, 25%)',
						900: 'hsl(53, 87%, 15%)',
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'bounce': {
					'0%, 20%, 53%, 80%, 100%': {
						transform: 'translateY(0)'
					},
					'40%, 43%': {
						transform: 'translateY(-10px)'
					},
					'70%': {
						transform: 'translateY(-5px)'
					},
					'90%': {
						transform: 'translateY(-2px)'
					}
				},
				'pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '.7'
					}
				},
				'gradient': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'gradient-flow': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'25%': {
						backgroundPosition: '50% 0%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'75%': {
						backgroundPosition: '50% 100%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--career-glow) / 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--career-glow) / 0.8), 0 0 60px hsl(var(--career-glow) / 0.3)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'bounce': 'bounce 2s infinite',
				'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'gradient': 'gradient 3s ease-in-out infinite',
				'gradient-flow': 'gradient-flow 4s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate'
			},
			boxShadow: {
				'3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
