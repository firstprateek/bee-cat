import './styles/main.css';
import BeeCat from './BeeCat';
document.querySelectorAll('[data-component="beecat"]').forEach(el => new BeeCat(el));