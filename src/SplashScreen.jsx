import Lanyard from './Lanyard'
import './SplashScreen.css'
export default function SplashScreen({ onEnter }) {
  return (
    <div className="splash">
      {/* 3D Lanyard card */}
      <div className="splash-lanyard">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* Message below the lanyard */}
      <div className="splash-content">
        <h1 className="splash-name">Hi, I'm Mina!</h1>
        <p className="splash-sub">IT Student at Asia Pacific College</p>
        <button className="splash-btn" onClick={onEnter}>
          View my personal website →
        </button>
      </div>
    </div>
  )
}
