type Props = {
  review: string;
};

const ReviewPanel = ({ review }: Props) => {
  return (
    <div>
      <h2>AI Review</h2>

      <p>
        {review ||
          "Paste code and click Review Code"}
      </p>
    </div>
  );
};

export default ReviewPanel;