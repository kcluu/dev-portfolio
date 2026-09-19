import { featuredTracks } from "../../data/tracks";

import "./MusicPanel.css";

export const MusicPanel = () => {
  return (
    <section className="music-panel">
      <header className="music-header">
        <div className="cover-art" aria-hidden="true">
          ♪
        </div>

        <div className="music-meta">
          <p className="music-kicker">Playlist</p>
          <h1 className="music-title">On Repeat</h1>
          <p className="music-sub">
            Katelyn Luu · {featuredTracks.length} songs
          </p>
        </div>
      </header>

      <div className="track-list">
        {featuredTracks.map((track) => (
          <iframe
            key={track.id}
            className="track-embed"
            title={`Spotify track ${track.id}`}
            src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=1`}
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};
