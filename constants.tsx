
import { NavItem } from './types';

export const APP_LIST: NavItem[] = [
  {
    id: 'dice',
    title: '极简骰子',
    description: '一个极简、直观的在线掷骰子工具。适用于桌游、决策或简单的随机数生成。',
    url: 'https://game-dice.oohcode.com',
    icon: 'fa-solid fa-dice',
    category: 'Game',
    color: 'from-blue-500 to-indigo-600',
    tags: ['休闲', '工具', '极简']
  },
  {
    id: 'sudoku',
    title: '数独游戏',
    description: '经典的数独逻辑挑战。提供多种难度，洁净的界面让你专注于思考。',
    url: 'https://game-sudoku.oohcode.com',
    icon: 'fa-solid fa-grid-view',
    category: 'Game',
    color: 'from-emerald-500 to-teal-600',
    tags: ['益智', '逻辑', '经典']
  },
  {
    id: 'snake',
    title: '贪吃蛇游戏',
    description: '经典的贪吃蛇挑战，通过灵活的移动吃掉食物并不断成长。极简设计带来最纯粹的乐趣。',
    url: 'https://game-snake.oohcode.com',
    icon: 'fa-solid fa-worm',
    category: 'Game',
    color: 'from-lime-500 to-green-600',
    tags: ['经典', '敏捷', '趣味']
  },
  {
    id: 'coming-soon-1',
    title: '敬请期待',
    description: '更多精彩的小游戏和高效工具正在路上，敬请关注我们的最新动态。',
    url: '#',
    icon: 'fa-solid fa-hourglass-start',
    category: 'Other',
    color: 'from-slate-400 to-slate-500',
    tags: ['探索']
  }
];
