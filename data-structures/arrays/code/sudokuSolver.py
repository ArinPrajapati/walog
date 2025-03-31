from ast import List
from ast import collections


class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        row = [set() for _ in range(9)]
        col = [set() for _ in range(9)]
        sqr = [set() for _ in range(9)]

        for i in range(9):
            for j in range(9):
                if board[i][j] != ".":
                    num = int(board[i][j])
                    row[i].add(num)
                    col[j].add(num)

                    box_id = i // 3 * 3 + j // 3
                    sqr[box_id].add(num)

        def backtrack(i, j):
            nonlocal solved
            if i == 9:
                solved = True
                return
            new_i = i + (j + 1) // 9
            new_j = (j + 1) % 9

            if board[i][j] != ".":
                backtrack(new_i, new_j)
            else:
                for num in range(1, 10):
                    box_id = i // 3 * 3 + j // 3
                    if (
                        num not in row[i]
                        and num not in col[j]
                        and num not in sqr[box_id]
                    ):
                        row[i].add(num)
                        col[j].add(num)
                        sqr[box_id].add(num)
                        board[i][j] = str(num)
                        backtrack(new_i, new_j)
                        if not solved:
                            row[i].remove(num)
                            col[j].remove(num)
                            sqr[box_id].remove(num)
                            board[i][j] = "."

        solved = False

        backtrack(0, 0)
