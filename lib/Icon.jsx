const getIcon = appName => {
  switch (appName) {
    case 'Activity Monitor':
      return 'fab fa-heartbeat';

    case 'Android Studio':
      return 'fab fa-android';

    case 'Adobe Media Encoder CC 2019':
    case 'Adobe Premiere Pro CC 2019':
    case 'Final Cut Pro':
      return 'fas fa-photo-video';

    case 'Calendar':
      return 'far fa-calendar-alt';

    case 'Discord':
      return 'fab fa-discord';

    case 'FaceTime':
      return 'fas fa-phone-square';

    case 'Finder':
      return 'fa fa-folder';

    case 'Google Chrome':
      return 'fab fa-chrome';

    case 'iTerm2':
      return 'fa fa-terminal';

    case 'KakaoTalk':
      return 'fa fa-comments';

    case 'Lightroom Classic': 
    case 'Photoshop CC':
      return 'fas fa-camera-retro';

    case 'Mail':
      return 'fa fa-envelope';

    case 'Microsoft Excel':
      return 'fas fa-table';

    case 'Music':
      return 'fa fa-music';

    case 'Preview':
      return 'fas fa-file-alt';

    case 'qbittorrent':
      return 'fas fa-file-download';

    case 'QuickTime Player':
      return 'fas fa-play-circle';

    case 'Spotify':
      return 'fab fa-spotify';

    case 'Spotlight':
      return 'fas fa-search';

    case 'System Preferences':
      return 'fa fa-cogs';

    case 'Unity':
      return 'fa fa-gamepad';

    case 'Xcode':
      return 'fab fa-xing';

    case 'zoom.us':
      return 'fa fa-video-camera';

    default:
      return 'fa fa-question-circle';
  }
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
