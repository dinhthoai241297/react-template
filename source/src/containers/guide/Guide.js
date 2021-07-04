import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoading } from '_selectors/appCommon'
import {
    showFullScreenLoading,
    hideFullScreenLoading,
} from '_reducers/appCommon'
import { getProfile } from '_actions/account'

import GuidePage from '_components/guide/GuidePage'
import accountSelectors from '_selectors/account'

const Guide = () => {
    const loading = useSelector(getLoading)
    const isAuthenticated = useSelector(accountSelectors.isAuthenticated)
    const profile = useSelector(accountSelectors.profile)
    const dispatch = useDispatch()

    const handleShowFullScreenLoading = () => {
        dispatch(showFullScreenLoading())

        setTimeout(() => {
            dispatch(hideFullScreenLoading())
        }, 2000)
    }

    const handleGetProfile = () => {
        dispatch(
            getProfile({
                onCompleted: () => console.log('completed'),
                onError: () => console.log('error'),
            })
        )
    }

    return (
        <GuidePage
            loading={loading}
            handleShowFullScreenLoading={handleShowFullScreenLoading}
            handleGetProfile={handleGetProfile}
            isAuthenticated={isAuthenticated}
            profile={profile}
        />
    )
}

export default Guide
