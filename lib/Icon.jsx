const getIcon = appName => {
    let className = null;

    if (appName == 'Google Chrome') {
        className="fab fa-chrome";
    } else if (appName == 'zoom.us' | appName == 'QuickTime Player') {
        className="fa fa-video-camera"
    } else if (appName == 'KakaoTalk') {
        className="fa fa-comments"
    } else if (appName == 'Unity') {
        className="fa fa-gamepad";
    } else if (appName == 'Discord') {
        className="fab fa-discord";
    } else if (appName == 'Music') {
        className="fa fa-music";
    } else if (appName == 'Finder') {
        className="fa fa-folder";
    } else if (appName == 'Calendar') {
        className="far fa-calendar-alt";
    } else if (appName == 'iTerm2') {
        className="fa fa-terminal";
    } else if (appName == 'Mail') {
        className="fa fa-envelope";
    } else if (appName == 'Xcode') {
        className="fab fa-xing";
    } else if (appName == 'Spotify') {
        className="fab fa-spotify";
    } else if (appName == 'Preview') {
        className="fas fa-file-alt";
    } else if (appName == 'Microsoft Excel') {
        className="fas fa-table"
    } else if (appName == 'qbittorrent') {
        className="fas fa-file-download"
    } else if (appName == 'mpv' || appName == 'QuickTime Player') {
        className="fas fa-play-circle"
    } else if (appName == 'Lightroom Classic' | appName == 'Photoshop CC') {
        className="fas fa-camera-retro"
    } else if (appName == 'Adobe Premiere Pro CC 2019' | appName == 'Final Cut Pro' | appName == 'Adobe Media Encoder CC 2019') {
        className="fas fa-photo-video"
    } else if (appName == 'System Preferences') {
        className="fa fa-cogs"
    } else if (appName == 'None') {
        className="far fa-circle"
    } else {
        className="fa fa-question-circle";
    }

    return className;
}

const style = {
  margin: '0 0.3em',
  color: '#2e3440',
};

export default ({ appName }) => {
    const iconClass = getIcon(appName);
    const fontScale = (iconClass.slice(0,2) == 'fa') ? '1.3em' : '1.7em'
    return (
        <i className={iconClass} style={{ ...style, fontSize: fontScale }}/>
    );
}
