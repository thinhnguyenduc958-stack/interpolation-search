import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Cấu trúc dữ liệu nào phù hợp nhất với thuật toán Interpolation Search?',
    options: [
      'Mảng (Array) đã được sắp xếp tăng dần',
      'Danh sách liên kết đơn (Singly Linked List) chưa sắp xếp',
      'Cây nhị phân tìm kiếm (Binary Search Tree)',
      'Bảng băm (Hash Table)',
    ],
    correctIndex: 0,
    explanation:
      'Interpolation Search yêu cầu truy cập ngẫu nhiên đến bất kỳ chỉ số nào trong thời gian O(1) (Random Access) và mảng bắt buộc phải được sắp xếp tăng dần.',
  },
  {
    id: 2,
    question: 'Độ phức tạp thời gian trung bình (Average Case) của Interpolation Search khi dữ liệu phân bố đều là bao nhiêu?',
    options: [
      'O(n)',
      'O(log n)',
      'O(log log n)',
      'O(1)',
    ],
    correctIndex: 2,
    explanation:
      'Khi các phần tử trong mảng được phân bố đều (uniformly distributed), độ phức tạp thời gian trung bình của Interpolation Search là O(log log n), nhanh hơn đáng kể so với O(log n) của Binary Search.',
  },
  {
    id: 3,
    question: 'Interpolation Search khác Binary Search ở điểm cốt lõi nào?',
    options: [
      'Interpolation Search có thể chạy trên mảng chưa sắp xếp',
      'Binary Search luôn chia đôi khoảng (mid = (low+high)/2), còn Interpolation Search ước lượng vị trí pos dựa trên giá trị của khóa tìm kiếm',
      'Interpolation Search luôn tốn nhiều bộ nhớ phụ O(n) hơn',
      'Binary Search chỉ áp dụng được với chuỗi ký tự, không áp dụng được với số',
    ],
    correctIndex: 1,
    explanation:
      'Điểm khác biệt cốt lõi: Binary Search luôn chia đôi khoảng ở vị trí chính giữa, trong khi Interpolation Search tính toán vị trí ước lượng pos thông qua tỉ lệ giá trị target so với arr[low] và arr[high] (tương tự như khi ta tra danh bạ hay từ điển).',
  },
  {
    id: 4,
    question: 'Điều kiện phân bố dữ liệu lý tưởng để Interpolation Search phát huy sức mạnh tối đa là gì?',
    options: [
      'Phân bố tăng dần theo hàm mũ (Exponential)',
      'Phân bố đều (Uniformly distributed) hoặc khoảng cách giữa các phần tử xấp xỉ bằng nhau',
      'Dữ liệu tập trung toàn bộ ở hai đầu mảng',
      'Các phần tử hoàn toàn ngẫu nhiên không theo quy luật',
    ],
    correctIndex: 1,
    explanation:
      'Khi dữ liệu phân bố tương đối đồng đều (chẳng hạn cấp số cộng hoặc khoảng cách giữa các số lân cận xấp xỉ bằng nhau), công thức nội suy sẽ tính ra vị trí cực kỳ chính xác, thường tìm thấy chỉ sau 1-2 bước.',
  },
  {
    id: 5,
    question: 'Trong trường hợp xấu nhất (Worst Case), ví dụ dữ liệu phân bố lệch rất lớn theo hàm mũ (như [1, 2, 4, 8, 16, 32, ..., 1000000]) và tìm khóa nhỏ, độ phức tạp của Interpolation Search có thể suy biến thành:',
    options: [
      'O(log log n)',
      'O(log n)',
      'O(n)',
      'O(n²)',
    ],
    correctIndex: 2,
    explanation:
      'Trong trường hợp dữ liệu phân bố cực kỳ lệch, mỗi bước thuật toán chỉ loại bỏ được 1 phần tử (tương tự như Linear Search), dẫn đến độ phức tạp suy biến thành O(n).',
  },
  {
    id: 6,
    question: 'Tại sao mã nguồn Interpolation Search phải có kiểm tra: if (arr[high] == arr[low])?',
    options: [
      'Để kiểm tra xem mảng có bị rỗng hay không',
      'Để tránh lỗi chia cho 0 (Division by Zero) trong công thức mẫu số (arr[high] - arr[low])',
      'Để tăng tốc độ biên dịch chương trình',
      'Để sắp xếp lại mảng nếu bị đảo ngược',
    ],
    correctIndex: 1,
    explanation:
      'Mẫu số trong công thức nội suy là (arr[high] - arr[low]). Nếu tất cả các phần tử trong khoảng hiện tại có giá trị bằng nhau, arr[high] - arr[low] = 0, nếu không kiểm tra sẽ gây ra lỗi chia cho 0 (Crash runtime / Infinity).',
  },
];
