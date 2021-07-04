import React from 'react'

const GuidePage = ({
    handleShowFullScreenLoading,
    loading,
    handleGetProfile,
    isAuthenticated,
    profile,
}) => {
    return (
        <div className="p-6">
            <h1>Guide</h1>
            <hr />
            <div>
                <h3>Dispatch loading - redux toolkit action</h3>
                <div>{loading}</div>
                <div className="mt-2">
                    <button onClick={handleShowFullScreenLoading}>
                        Show loading
                    </button>
                    <span className="ml-2">Auto hide loading after 2s</span>
                </div>
            </div>
            <hr />
            <div>
                <h3>Mock get profile</h3>
                <div>isAuthenticated: {isAuthenticated + ''}</div>
                <pre>{JSON.stringify(profile, null, 4)}</pre>
                <div className="mt-2">
                    <button onClick={handleGetProfile}>get profile</button>
                </div>
            </div>
        </div>
    )
}

export default GuidePage
