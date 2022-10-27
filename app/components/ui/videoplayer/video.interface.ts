export interface IVideoPlayer {
	videoSrc: string
	slug: string
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullScreen?: () => void
	mozRequestFullScreen?: () => void
	webkitRequestFullScreen?: () => void
}
