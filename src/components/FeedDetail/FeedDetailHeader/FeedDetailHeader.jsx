import ProfileImage from 'components/Common/Feed/ProfileImage/ProfileImage'
import s from './FeedDetailHeader.module.scss'

const FeedDetailHeader = ({ author, commentCount }) => {
  return (
    <header className={s.header}>
      <ProfileImage image={author.image} username={author.username} className={s.image} />
      <p className={s.profileId}>{author.username}</p>
      <p className={s.commentNumber}>댓글{commentCount}</p>
    </header>
  )
}

export default FeedDetailHeader
