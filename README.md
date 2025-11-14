# 🚀 Portfolio Omar Agtib - Full-Stack Developer

---

## 📋 Table des Matières

- [✨ Aperçu](#-aperçu)
- [🎯 Fonctionnalités](#-fonctionnalités)
- [🛠️ Technologies](#️-technologies)
- [📁 Architecture](#-architecture)
- [🚀 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🎨 Personnalisation](#-personnalisation)
- [📱 Responsive Design](#-responsive-design)
- [🌐 Déploiement](#-déploiement)
- [📝 License](#-license)

---

## ✨ Aperçu

Portfolio professionnel développé avec les technologies les plus récentes pour présenter mes compétences, expériences et projets de manière élégante et interactive.

### 🎥 Captures d'écran

```
┌─────────────────────────────────────────┐
│  🌟 Hero Section avec Particules        │
│  📊 Stats & Informations                │
│  💼 Expériences Professionnelles        │
│  🎨 Portfolio de Projets Interactif     │
│  🎓 Formation Académique                │
│  💡 Compétences & Certifications        │
│  📧 Section Contact                     │
└─────────────────────────────────────────┘
```

---

## 🎯 Fonctionnalités

### 🎨 Design & UX

- ✅ **Design Moderne** - Interface épurée et professionnelle
- ✅ **Animations Fluides** - Micro-interactions et transitions soignées
- ✅ **Effet Particules** - Background animé dans la section hero
- ✅ **Mode Sombre/Clair** - Thème adaptatif avec localStorage
- ✅ **100% Responsive** - Optimisé pour tous les appareils

### 🌍 Internationalisation

- ✅ **Multilingue** - Français et Anglais
- ✅ **Switch Instantané** - Changement de langue sans rechargement
- ✅ **Traductions Complètes** - Tous les textes traduits

### 🚀 Performance

- ✅ **Next.js 15** - Server-side rendering et optimisations automatiques
- ✅ **TypeScript** - Typage strict pour moins de bugs
- ✅ **Code Splitting** - Chargement optimisé des composants
- ✅ **Lazy Loading** - Images et ressources chargées à la demande

### 📱 Sections

1. **Hero** - Présentation avec effet particules
2. **À Propos** - Profil et statistiques
3. **Expérience** - Parcours professionnel détaillé
4. **Projets** - Portfolio avec filtres par catégorie
5. **Formation** - Diplômes et certifications
6. **Compétences** - Stack technique et langues
7. **Contact** - Formulaire et liens sociaux

---

## 🛠️ Technologies

### Frontend

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React 0.263
- **Animations:** CSS Custom Animations

### Architecture

- **State Management:** React Context API
- **Hooks Personnalisés:** Navigation et état
- **Type Safety:** TypeScript strict mode
- **Code Quality:** ESLint + Prettier

### DevOps & Deployment

- **Version Control:** Git
- **Deployment:** Vercel / Netlify ready
- **CI/CD:** GitHub Actions compatible

---

## 📁 Architecture

```
portfolio/
│
├── 📂 app/                      # Next.js App Router
│   ├── layout.tsx              # Layout principal avec metadata
│   ├── page.tsx                # Page d'accueil composée
│   └── globals.css             # Styles globaux et animations
│
├── 📂 components/              # Composants React réutilisables
│   ├── Navigation.tsx          # Barre de navigation sticky
│   ├── Hero.tsx                # Section hero avec particules
│   ├── About.tsx               # Section à propos
│   ├── Experience.tsx          # Timeline expériences
│   ├── Projects.tsx            # ⭐ Portfolio projets filtrable
│   ├── Education.tsx           # Parcours académique
│   ├── Skills.tsx              # Compétences techniques
│   ├── Contact.tsx             # Formulaire de contact
│   └── Footer.tsx              # Pied de page
│
├── 📂 lib/                     # Logique métier et data
│   ├── translations.ts         # 🌍 Traductions FR/EN
│   └── data.ts                 # 📊 Données du portfolio
│
├── 📂 contexts/                # React Context
│   └── ThemeContext.tsx        # Thème et langue
│
├── 📂 hooks/                   # Custom React Hooks
│   └── useActiveSection.ts     # Navigation scroll spy
│
├── 📂 types/                   # TypeScript types
│   └── index.ts                # Interfaces et types
│
├── 📂 public/                  # Assets statiques
│   ├── cv.pdf                  # CV téléchargeable
│   └── projects/               # Images de projets
│
├── 📄 next.config.js           # Configuration Next.js
├── 📄 tailwind.config.ts       # Configuration Tailwind
├── 📄 tsconfig.json            # Configuration TypeScript
├── 📄 package.json             # Dépendances
└── 📄 README.md                # Documentation
```

### 🏗️ Patterns & Best Practices

- **Component-Based Architecture** - Composants modulaires et réutilisables
- **Separation of Concerns** - Data, logic et UI séparés
- **Type Safety** - Interfaces TypeScript strictes
- **Performance Optimization** - Lazy loading et memoization
- **Accessibility** - ARIA labels et navigation keyboard

---

## 🚀 Installation

### Prérequis

```bash
Node.js >= 18.0.0
npm >= 9.0.0 (ou yarn/pnpm)
Git
```

### Installation Rapide

```bash
# 1. Cloner le repository
git clone https://github.com/omaragtib/portfolio.git
cd portfolio

# 2. Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install

# 3. Lancer en développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:3000
```

### Installation Complète

```bash
# Créer un nouveau projet Next.js
npx create-next-app@latest omar-portfolio --typescript --tailwind --app

# Naviguer dans le projet
cd omar-portfolio

# Installer Lucide React (icons)
npm install lucide-react

# Copier tous les fichiers de structure
# (components, lib, contexts, hooks, types)

# Lancer le projet
npm run dev
```

---

## ⚙️ Configuration

### 1. Variables d'Environnement (Optionnel)

Créer un fichier `.env.local`:

```env
# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Email Service (si vous ajoutez un formulaire backend)
EMAIL_SERVICE_KEY=your_email_service_key
```

### 2. Métadonnées SEO

Modifier `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Votre Nom - Full-Stack Developer",
  description: "Votre description",
  keywords: ["vos", "mots", "clés"],
  // ... autres métadonnées
};
```

### 3. Google Analytics (Optionnel)

Ajouter dans `app/layout.tsx`:

```typescript
import Script from "next/script";

// Dans le component
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>;
```

---

## 🎨 Personnalisation

### 1. Informations Personnelles

**Éditer `lib/data.ts`:**

```typescript
// Expériences
export const experiences = [
  {
    company: "Votre Entreprise",
    role: { fr: "Votre Poste", en: "Your Position" },
    // ...
  },
];

// Projets
export const projects = [
  {
    title: "Votre Projet",
    description: { fr: "...", en: "..." },
    technologies: ["React", "Node.js"],
    github: "https://github.com/vous/projet",
    // ...
  },
];

// Contact
export const contactInfo = {
  email: "votre@email.com",
  phone: "+212...",
  linkedin: "votre-linkedin",
};
```

### 2. Remplacer l'Icône par votre Photo

**Dans `components/Hero.tsx`:**

```typescript
// Remplacer
<Code className="w-24 h-24 text-white" />

// Par
<img
  src="/profile.jpg"
  alt="Votre Nom"
  className="w-full h-full object-cover rounded-full"
/>
```

### 3. Ajouter votre CV

```bash
# Placer votre CV dans /public/
public/cv-omar-agtib.pdf
```

**Mettre à jour le lien dans `components/Hero.tsx`:**

```typescript
<a href="/cv-omar-agtib.pdf" download>
  <button>Télécharger CV</button>
</a>
```

### 4. Images de Projets

```bash
# Ajouter vos images dans
public/projects/
  ├── projet1.jpg
  ├── projet2.jpg
  └── projet3.jpg
```

### 5. Couleurs et Thème

**Modifier `tailwind.config.ts`:**

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### 6. Ajouter/Modifier des Traductions

**Éditer `lib/translations.ts`:**

```typescript
export const translations = {
  fr: {
    // Ajouter vos traductions
    nouveauTexte: "Nouveau texte en français",
  },
  en: {
    nouveauTexte: "New text in English",
  },
};
```

---

## 📱 Responsive Design

Le portfolio est optimisé pour tous les appareils:

| Device     | Breakpoint     | Layout                          |
| ---------- | -------------- | ------------------------------- |
| 📱 Mobile  | < 640px        | 1 colonne, menu burger          |
| 📱 Tablet  | 640px - 1024px | 2 colonnes, navigation compacte |
| 💻 Desktop | > 1024px       | 3 colonnes, navigation complète |
| 🖥️ Large   | > 1280px       | Layout étendu avec marges       |

### Tests Responsiveness

```bash
# Mobile
Chrome DevTools: iPhone 12 Pro
# Tablet
Chrome DevTools: iPad Air
# Desktop
1920x1080 et 2560x1440
```

---

## 🌐 Déploiement

### Vercel (Recommandé)

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer
vercel

# 3. Suivre les instructions
# Le site sera déployé automatiquement
```

**Ou via GitHub:**

1. Push votre code sur GitHub
2. Connectez votre repo sur [vercel.com](https://vercel.com)
3. Déploiement automatique à chaque push

### Netlify

```bash
# 1. Build le projet
npm run build

# 2. Déployer avec Netlify CLI
npm install netlify-cli -g
netlify deploy --prod --dir=.next
```

### Docker (Optionnel)

Créer un `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📊 Performance

### Lighthouse Score Objectif

- 🟢 Performance: 95+
- 🟢 Accessibility: 100
- 🟢 Best Practices: 100
- 🟢 SEO: 100

### Optimisations Incluses

- ✅ Image optimization avec Next.js Image
- ✅ Font optimization avec next/font
- ✅ Code splitting automatique
- ✅ CSS minification
- ✅ Lazy loading des composants
- ✅ Prefetching des liens

---

## 🤝 Contribution

Les contributions sont les bienvenues!

```bash
# 1. Fork le projet
# 2. Créer une branche
git checkout -b feature/amazing-feature

# 3. Commit
git commit -m 'Add amazing feature'

# 4. Push
git push origin feature/amazing-feature

# 5. Ouvrir une Pull Request
```

---

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

## 📧 Contact

**Omar Agtib** - Full-Stack Developer

- 📧 Email: OMAR.AGTIB@GMAIL.COM
- 💼 LinkedIn: [omar-agtib-a1371525b](https://www.linkedin.com/in/omar-agtib-a1371525b)
- 📱 Téléphone: +212 713 646 784
- 📍 Localisation: Casablanca, Morocco

---

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">

**⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile!**

Made with ❤️ by Omar Agtib

</div>
