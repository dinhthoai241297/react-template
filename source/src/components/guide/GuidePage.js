import React from 'react'
import FAIcon from '_components/common/FAIcon'

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

            <hr />
            <div>
                <h3>FontAwesome Icon</h3>
                <div>
                    <FAIcon icon="atom" size="xs" />
                    <FAIcon icon="atom" className="ml-2" />
                    <FAIcon icon="atom" size="lg" className="ml-2" pulse />
                    <FAIcon icon="atom" size="2x" className="ml-2" spin />
                </div>
                <div className="mt-4">
                    <FAIcon icon="bicycle" size="lg" />
                    <FAIcon
                        icon="bicycle"
                        size="lg"
                        className="ml-2"
                        color="purple"
                    />
                    <FAIcon icon="bicycle" size="lg" className="ml-2" border />
                </div>
                <div className="mt-4">
                    <a
                        href="https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GuidePage
