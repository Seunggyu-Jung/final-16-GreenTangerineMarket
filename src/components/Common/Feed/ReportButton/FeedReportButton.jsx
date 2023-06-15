import { useRef, useState } from 'react'

import s from './FeedReportButton.module.scss'

import { MsmallButton, MsmallWhiteButton } from 'components/Common/Button/Msmall/MsmallButton'
import { reportFeedAPI } from 'api/feed'
import { Toaster, toast } from 'react-hot-toast'

const FeedReportButton = ({ id, closeMenu }) => {
  const modalRef = useRef()
  const handleReportClick = e => {
    modalRef.current.showModal()
  }
  const cancelReport = () => {
    modalRef.current.close()
    closeMenu()
  }
  const clickModal = e => {
    if (e.target.nodeName === 'DIALOG') {
      modalRef.current.close()
      closeMenu()
    }
  }
  const reportFeed = async () => {
    const res = await reportFeedAPI(id)
    if (res.status === 200) {
      toast('해당 피드가 신고되었습니다!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontSize: '2rem',
          padding: '1rem',
          marginBottom: '2rem',
        },
      })
    }
    modalRef.current.close()
    closeMenu()
  }
  return (
    <>
      <button type='button' onClick={handleReportClick}>
        신고
      </button>
      <dialog ref={modalRef} className={s.modal} onClick={clickModal}>
        <div className={s.container}>
          <p>
            해당 피드를 <strong>신고</strong>하시겠습니까?
          </p>
          <div className={s.button}>
            <MsmallWhiteButton onClickEvent={cancelReport}>취소</MsmallWhiteButton>
            <MsmallButton onClickEvent={reportFeed}>확인</MsmallButton>
          </div>
        </div>
      </dialog>
      <Toaster position='bottom-center' />
    </>
  )
}

export default FeedReportButton
