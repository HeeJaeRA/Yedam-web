module.exports = {
	boardList: `select *, (select count(*) from t_comment_board where t_comment_board.bno = t_board_board.no) as c_length from t_board_board order by NO`,

	boardInfo: `select *, (select count(*) from t_comment_board where t_comment_board.bno = t_board_board.no) as c_length from t_board_board where NO = ?`,

	boardInsert: `insert into t_board_board set ?`,

	boardUpdate: `update t_board_board SET ? where NO = ?`,

	replyList: `select no, writer, content, created_date from t_comment_board where bno = ?`,
};
