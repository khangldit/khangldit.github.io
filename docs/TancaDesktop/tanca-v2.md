---
title: Tanca V2
---

# Phần mềm TancaV2

## Hiểu về phần mềm

Tham khảo tại : [GoogleDocs - Phần mềm Tanca V2 - Tổng quan phần mềm](https://docs.google.com/document/d/1ucUDCwU3yg8C7LFQJUCcxVWYdYa8iT0Avr2OyElDClo/edit?usp=sharing)

Phần mềm hoạt động gồm 2 phần chính: Giao điện (WinForm) và Windows Service (API)

### Giao diện - Windows Form:

- Giao diện chính dùng để thể hiện các thông tin cho người dùng, cố gắn tối giản nhất có thể loại bỏ hết các chi tiết không sử dụng.
- Quản lý trạng thái hoạt động của Windows Service
- Sử dụng HttpClient để gọi qua phía Windows Service để thực hiện tất cả các thao tác liên quan đến dữ liệu và máy chấm công.

### Windows Service - API - .NET Core:

- Là một host service chạy dưới dạng windows service cho phép gọi các API để xử lí dữ liệu và kết nối máy chấm công.
- Sử dụng MongoDB để lưu trữ dữ liệu ở máy tính local
- Sử dụng các SDK của máy chấm công để kết nối, tải các dữ liệu chấm công bao gồm:

  - **zkem**: kết nối được các dòng ZKTeco, phần mềm V1 chỉ kết nối được các dòng zkem
  - **ax_FP**: dùng để kết nối với các dòng Ronal Jack mới như RJ1200, RJ4200,... Đa số là do LogicBuy cung cấp hoặc có thể là 1 máy khác với tên hãng khác và giao diện khác.
  - **akio_302**: Kết nối dược máy Aikyo IFace 302, hiện tại chỉ thấy có 1 giao diện máy chưa có bản sao, có chấm công được cả vân tay và khuôn mặt.
  - **akio_602**: Kết nối được máy chỉ có khuôn mặt Aikyo IFace 602 với license 1262
  - **akio_5000**: dùng cùng sdk của 602 nhưng license là 1260
  - **hikvision**: có rất nhiều mẫu mã, hình dáng bên ngoài khác nhau, cần kết nối thư mới chính xác.

- Các xử lý kết nối liên quan máy chấm công xem trong file ApiTimekeeper.cs
- Khi khởi động service, tạo ra 1 service chạy background tuần hoàn theo 1 thời gian đã cấu hình để Tải và Đẩy log

## Hướng dẫn build phần mềm

### Build API

- Ở file program, trong “if (isService)” phải là “host.RunAsService()”
- Chọn môi trường là Release - x86
- Chọn Build => Clean, Build => Build Solution
- Sau khi build sẽ sinh ra file trong thư mục win7-x86
- Nén thư mục win7-x86 thành => source.zip

### Build Setup file

- Vào File System của Setup1 project
- Vào Application Folder
- Import vào 1 file .ico để làm icon cho phần mềm lúc build ra
- Import file cmd.exe, copy file ở C:/Windows/System32
- Import file source.zip đã build ở bước 1 vào (xóa file cũ nếu có)
- Import Add => Project Output => Primary output (Tanca) => OK
- Tạo ra 1 Shortcut từ file Primary output from Tanca (Active) =>Đặt tên lại là Tanca => Kéo file đó - qua thư mục User’s Desktop
- Tạo tương tự 1 shortcut cho User’s Programs Menu/App
- Cả 2 shortcut => Propertise => Set Icon là file .ico đã import
- Bấm vào tên Setup1 project => Bấm vào tab Propertise => Set icon, các thông tin liên quan.
- Chọn môi trường Release - AnyCPU
- Chuột phải vào setup project => Rebuild

### Các vấn đề khác

- Khi khởi tạo, phần mềm sẽ tạo ra 1 service tên TancaService chạy trên source đã build ở bước 1, các trường hợp cần dừng dịch vụ hay xóa dịch vụ làm theo các lệnh sau.
  - Mở CMD.exe với quyền admin
  - Dừng: “sc stop TancaService”
  - Xóa: “sc delete TancaService”
  - Chạy: “sc start TancaService”
  - Tạo: “sc create TancaService binPath=”path_to_exe” (path_to_exe là đường dẫn đến file Tanca.exe trong thư mục win7-x86 ví dụ: C:/ProgramFile/Tanca/Tanca/win7-x86/Tanca.exe
