const countComments = (comments) => {
  let totalkomen = 0;

  const countReplies = (replies) => {
    replies.forEach((reply) => {
      totalkomen += 1;
      if (reply.replies) {
        countReplies(reply.replies);
      }
    });
  };

  comments.forEach((comment) => {
    totalkomen += 1;
    if (comment.replies) {
      countReplies(comment.replies);
    }
  });

  return totalkomen;
};

const commentsData = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

const totalComments = countComments(commentsData);
console.log("Total komentar: ", totalComments);
