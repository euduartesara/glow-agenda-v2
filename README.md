# GlowAgenda 

Um sistema completo de agendamento para salões de beleza, desenvolvido com tecnologias modernas para oferecer uma experiência excepcional tanto para clientes quanto para profissionais.

## ✨ Sobre o Projeto

O GlowAgenda é uma plataforma web completa para gerenciamento de salões de beleza, permitindo agendamento online, controle de serviços, gestão de clientes e relatórios detalhados. Desenvolvido com foco na usabilidade e performance, o sistema oferece uma interface moderna e intuitiva.

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 16** - Framework React para produção
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Heroicons** - Biblioteca de ícones SVG
- **React Icons** - Conjunto de ícones populares

### Backend
- **Next.js API Routes** - API REST integrada
- **Banco de Dados Simulado** - Estrutura em memória para desenvolvimento

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e formatação de código
- **PostCSS** - Processador CSS
- **TypeScript** - Compilador TypeScript

## 📋 Funcionalidades

### 👤 Sistema de Autenticação
- Login seguro com validação
- Controle de permissões (Admin/Proprietário/Atendente)
- Logout automático

### 📅 Agendamento
- Agendamento online intuitivo
- Visualização em calendário
- Confirmação instantânea
- Histórico de agendamentos

### 💇‍♀️ Gestão de Serviços
- Cadastro e edição de serviços
- Categorização (Cabelo, Tratamento, Coloração, etc.)
- Controle de preços e duração
- Status ativo/inativo

### 👥 Gestão de Clientes
- Cadastro completo de clientes
- Histórico de atendimentos
- Informações de contato

### 📊 Dashboard e Relatórios
- Estatísticas em tempo real
- Gráficos de receita e agendamentos
- Relatórios detalhados
- Métricas de performance

### ⚙️ Configurações
- Personalização do salão
- Gerenciamento de usuários
- Configurações do sistema

## 🏗️ Estrutura do Projeto

```
glow-agenda-v2/
├── app/                          # Páginas Next.js (App Router)
│   ├── agendamentos/            # Página de agendamentos
│   ├── cadastro/                # Página de cadastro
│   ├── clientes/                # Página de clientes
│   ├── dashboard/               # Dashboard principal
│   │   ├── components/          # Componentes do dashboard
│   │   ├── configuracoes/       # Configurações
│   │   └── relatorios/          # Relatórios
│   ├── login/                   # Página de login
│   ├── pagamento/               # Checkout de pagamentos
│   ├── relatorios/              # Relatórios públicos
│   └── servicos/                # Gestão de serviços
├── components/                  # Componentes compartilhados
├── lib/                         # Utilitários e configurações
├── middleware.ts                # Middleware Next.js
├── public/                      # Arquivos estáticos
└── styles/                      # Estilos globais
```

## 🖥️ Telas do Sistema

### 1. Página Inicial
- Design moderno com gradientes
- Seções: Hero, Serviços, Sobre, Depoimentos
- Call-to-action para agendamento

### 2. Dashboard
- Sidebar responsiva com navegação
- Cards de estatísticas
- Calendário integrado
- Lista de agendamentos

### 3. Gestão de Serviços
- Grid responsivo de 3 colunas
- Cards com ícone de tesoura
- Status ativo destacado
- Botões de editar/excluir estilizados

### 4. Agendamento
- Formulário multi-etapa
- Validação em tempo real
- Integração com calendário

### 5. Clientes
- Lista de clientes cadastrados
- Busca e filtros
- Detalhes do cliente

### 6. Relatórios
- Gráficos interativos
- Métricas de performance
- Exportação de dados

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/euduartesara/glow-agenda-v2.git
   cd glow-agenda-v2
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse a aplicação**
   - Abra [http://localhost:3000](http://localhost:3000) no navegador
   - Login padrão: `admin@glowbeauty.com` / `admin123`

### Build para Produção

```bash
npm run build
npm start
```

## 🎨 Design System

### Cores Principais
- **Roxo Gradiente**: `#9810FA` → `#FF4DA6`
- **Verde**: `#00A63E` (para valores monetários)
- **Vermelho**: `#E7000B` (botões excluir)
- **Branco**: `#FFFFFF` (botões editar)

### Componentes
- **Cards**: Bordas arredondadas, sombras suaves
- **Botões**: Gradientes e hover effects
- **Ícones**: Heroicons e React Icons
- **Layout**: Grid responsivo, flexbox

## 📱 Responsividade

O sistema é totalmente responsivo e otimizado para:
- 📱 Dispositivos móveis
- 📟 Tablets
- 💻 Desktops
- 🖥️ Telas grandes

## 🔧 Scripts Disponíveis

```json
{
  "dev": "next dev",           // Servidor de desenvolvimento
  "build": "next build",       // Build para produção
  "start": "next start",       // Servidor de produção
  "lint": "eslint"             // Verificação de código
}
```

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- Use TypeScript para tipagem
- Siga as convenções do ESLint
- Mantenha commits descritivos
- Teste suas mudanças

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

- **Desenvolvimento**: David, Kauã
- **Design**: Carlos, Marcos 
- **Projeto**: Equipe GlowAgenda

## 📞 Suporte

Para suporte técnico ou dúvidas:
- Email: contato@glowbeauty.com
- GitHub Issues: [Issues](https://github.com/euduartesara/glow-agenda-v2/issues)

---

**GlowAgenda** - Transformando a gestão de salões de beleza com tecnologia e elegância. ✨💅
