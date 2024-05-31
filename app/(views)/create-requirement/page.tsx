import React from "react";

function CreateRequirement() {
  return (
    <div>
      <div className="container-app">
        <h2 className="bg-secondary heading px-3 py-1">Tạo yêu cầu mới</h2>
        <p className="text-xs pt-2 pb-8">
          Hãy điền vào bảng dưới đây để mở phiếu yêu cầu mới.
        </p>
        <h3 className="text-2xl">Thông tin liên lạc</h3>
        <hr className="divide"></hr>
        <form>
          <div className="flex  mb-4">
            <label
              htmlFor="email"
              className="required min-w-[195px] px-5 py-2 text-right text-sm font-medium"
            >
              Địa chỉ email
            </label>
            <input id="email" type="text" className="input-app" />
          </div>
          {/* Họ tên */}
          <div className="flex  mb-4">
            <label
              htmlFor="fullname"
              className="required min-w-[195px] px-5 py-2 text-right text-sm font-medium"
            >
              Họ tên
            </label>
            <input id="fullname" type="text" className="input-app" />
          </div>
          {/* Số điện thoại */}
          <div className="flex  mb-4">
            <label
              htmlFor="phone"
              className="required min-w-[195px] px-5 py-2 text-right text-sm font-medium"
            >
              Số điện thoại
            </label>
            <div className="flex">
              <input id="phone" type="text" className="input-app" />
              <div className="flex">
                <label
                  htmlFor="phone"
                  className="min-w-[120px] px-5 py-2 text-right text-sm font-medium"
                >
                  Số máy lẻ:
                </label>
                <input id="phone" type="text" className="input-app" />
              </div>
            </div>
          </div>
          <hr className="divide"></hr>
          {/* Chủ đề */}
          <div className="flex  mb-4">
            <label
              htmlFor="phone"
              className="required min-w-[195px] px-5 py-2 text-right text-sm font-medium"
            >
              Chủ đề
            </label>
            <select className="w-full input-app">
              <option value="1">option</option>
            </select>
          </div>
          <div className="flex gap-2 justify-center">
            <button className="btn-success">Gửi đi</button>
            <button className="btn-warn">Làm mới</button>
            <button className="btn-danger">Hủy bỏ</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRequirement;
