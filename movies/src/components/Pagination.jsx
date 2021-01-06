import React from 'react'
const Pagination = ({ currentPage, pageCount, onJump }) => {
    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-end">
                <li className={currentPage > 1 ? 'page-item cp ' : 'page-item cp disabled'}>
                    <span onClick={() => onJump(currentPage - 1)} className="page-link">上一页</span>
                </li>
                {/* 上一页   上上一页 */}
                {
                    currentPage - 2 > 0 &&
                    <li className="page-item cp"><a onClick={() => onJump(currentPage - 2)} className="page-link">{currentPage - 2}</a></li>
                }
                {
                    currentPage - 1 > 0 &&
                    <li className="page-item cp"><a onClick={() => onJump(currentPage - 1)} className="page-link">{currentPage - 1}</a></li>
                }

                <li className="page-item cp active" aria-current="page">
                    <span className="page-link">
                        {currentPage}
                        <span className="sr-only">(current)</span>
                    </span>
                </li>

                {/*下一页  下下一页  */}
                {
                    currentPage + 1 <= pageCount &&
                    <li className="page-item cp"><a onClick={() => onJump(currentPage + 1)} className="page-link">{currentPage + 1}</a></li>
                }
                {
                    currentPage + 2 <= pageCount &&
                    <li className="page-item cp"><a onClick={() => onJump(currentPage + 2)} className="page-link">{currentPage + 2}</a></li>
                }


                <li className={currentPage >= pageCount ? 'page-item cp disabled' : 'page-item cp'}>
                    <a onClick={() => onJump(currentPage + 1)} className="page-link" >下一页</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination