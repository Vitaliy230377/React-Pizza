import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={420}
        viewBox="0 0 280 420"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="280" height="160" />
        <rect x="1" y="175" rx="15" ry="15" width="280" height="35" />
        <rect x="-1" y="231" rx="25" ry="25" width="280" height="88" />
        <rect x="1" y="334" rx="0" ry="0" width="91" height="36" />
        <rect x="123" y="333" rx="25" ry="25" width="154" height="37" />
    </ContentLoader>
)

export default Skeleton