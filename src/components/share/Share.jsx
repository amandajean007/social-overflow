import "./share.css";
import { PermMedia } from "@material-ui/icons";

export default function Share() {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img className="shareProfileImg" src="/assets/person/charliebrown.jpg" alt="" />
					<input
						placeholder="What's on your mind?"
						className="shareInput"
					/>
				</div>
					<hr className="shareHr"/>
						<div className="shareOptions">
							<div className="shareOption">
								<PermMedia className="shareIcon" />
								<span className="shareOptionText">Photo or Video</span>
							</div>
						</div>
				<div className="shareBottom"></div>
			</div>
		</div>
	)
}
