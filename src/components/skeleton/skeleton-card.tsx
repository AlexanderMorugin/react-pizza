import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonCard = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={445}
    viewBox="0 0 300 445"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="100" cy="100" r="100" /> 
    <rect x="0" y="210" rx="10" ry="10" width="300" height="24" /> 
    <rect x="0" y="249" rx="10" ry="10" width="300" height="67" /> 
    <rect x="0" y="333" rx="10" ry="10" width="120" height="34" /> 
    <rect x="137" y="333" rx="10" ry="10" width="159" height="34" />
  </ContentLoader>
)

export default SkeletonCard