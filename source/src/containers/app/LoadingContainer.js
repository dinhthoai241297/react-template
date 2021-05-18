import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '_components/common/Loading'
import { getLoading } from '_selectors/appSelectors'

const LoadingContainer = () => {
    const loading = useSelector(getLoading)
    return <Loading show={loading > 0} />
}

export default LoadingContainer
