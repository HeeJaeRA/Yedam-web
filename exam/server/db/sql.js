module.exports = {
	boardList: `select *, (select count(*) from t_comment_board where t_comment_board.bno = t_board_board.no) as c_length from t_board_board order by NO`,

	boardInfo: `select * from t_board_board where NO = ?`,

	boardInsert: `insert into t_board_board SET ?`,

	boardUpdate: `update t_board_board SET ? WHERE NO = ?`,

	replyList: `select * from t_comment_board where BNO = ?`,
};
