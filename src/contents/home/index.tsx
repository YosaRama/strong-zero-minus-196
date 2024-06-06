import ContentsHomeLemonPop from './lemon-pop'
import ContentsHomeMasthead from './masthead'
import ContentsHomeVideo from './video'
import ContentHomeSocialFeed from './social-feed'

export default function HomeContent() {
  return (
    <>
      <ContentsHomeMasthead />
      <ContentsHomeVideo />
      <ContentsHomeLemonPop />
      <ContentHomeSocialFeed />
    </>
  )
}
