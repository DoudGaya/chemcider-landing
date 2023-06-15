import { buildLegacyTheme } from "sanity"

const props = {
    "--text-white": 'rgb(241,254,255)',
    "--text-black": 'rgb(2,34,38)',
    "--primary": 'rgb(34,177,197)',
    "--secondary": 'rgb(14,135,148)',
    '--bg-color': 'rgba(3,12,12,0.92)',
    '--danger-btn': 'rgba(223,76,76,0.61)',
    '--success': 'rgba(81,223,76,0.53)',
    '--warning': 'rgba(223,216,76,0.53)'
}


export const chemciderTheme = buildLegacyTheme({
    
    '--brand-primary': props["--primary"],
    '--black': props['--bg-color'],
    '--white': props['--text-white'],
    '--component-bg': props['--text-black'],
    '--component-text-color': props['--text-white'],
    '--focus-color': props['--bg-color'],
    '--gray-base': props['--text-white'],
    '--gray': props['--text-white'],
    
   
    // BUTTONS     
    '--default-button-color': 'rgb(34,177,197)',
    '--default-button-danger-color': props['--danger-btn'],
    '--default-button-primary-color': props['--primary'],
    '--default-button-success-color': props['--success'],
    '--default-button-warning-color': props['--warning'],
    '--state-info-color': props['--text-black']


})