import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

// https://www.npmjs.com/package/lite-youtube-embed

type PropTypes = {
    embedId:string;
    thumbnail:string;
    title:string;
}

const VideoEmbed = ({ embedId, thumbnail, title }:PropTypes) => (
    <div className="block py-20 bg-slate-100">
        <section>
            <div className="grid grid-cols-1">
                <div className="col-span-1 w-full aspect-w-16 aspect-h-9">
                    <LiteYouTubeEmbed
                        aspectHeight={9}
                        aspectWidth={16}
                        id={embedId}
                        title={title}
                        thumbnail={thumbnail}
                        params="controls=1&modestbranding=1&loop=1&enablejsapi=1"
                    />
                </div>
            </div>
        </section>

    </div>
);

export default VideoEmbed