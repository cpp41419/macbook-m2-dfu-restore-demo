export const steps = [
  {
    id: 1,
    title: {
      en: "What You Need",
      vi: "Bạn cần chuẩn bị"
    },
    content: {
      en: `<ul>
        <li>Host Mac with Apple Configurator 2 installed</li>
        <li>USB-C to USB-C data cable (not charging-only)</li>
        <li>Power adapter for the MacBook Pro M2</li>
      </ul>
      <div class="note">Gather these items before starting.</div>`,
      vi: `<ul>
        <li>Máy Mac chủ đã cài đặt Apple Configurator 2</li>
        <li>Cáp USB-C sang USB-C (loại truyền dữ liệu, không chỉ sạc)</li>
        <li>Bộ nguồn cho MacBook Pro M2</li>
      </ul>
      <div class="note">Hãy chuẩn bị đầy đủ trước khi bắt đầu.</div>`
    }
  },
  {
    id: 2,
    title: {
      en: "Set Up the Host Mac",
      vi: "Chuẩn bị máy Mac chủ"
    },
    content: {
      en: `<ul>
        <li>Open Apple Configurator 2 on the Host Mac.</li>
        <li>Make sure the Host Mac is connected to power.</li>
      </ul>`,
      vi: `<ul>
        <li>Mở Apple Configurator 2 trên máy Mac chủ.</li>
        <li>Đảm bảo máy Mac chủ được kết nối nguồn điện.</li>
      </ul>`
    }
  },
  {
    id: 3,
    title: {
      en: "Connect the Target Mac",
      vi: "Kết nối MacBook Pro M2"
    },
    content: {
      en: `<ul>
        <li>Connect the MacBook Pro M2 to the Host Mac using the USB-C data cable.</li>
        <li><span class="important">Do not use hubs or adapters.</span></li>
      </ul>`,
      vi: `<ul>
        <li>Kết nối MacBook Pro M2 với máy Mac chủ bằng cáp USB-C.</li>
        <li><span class="important">Không sử dụng hub hoặc adapter.</span></li>
      </ul>`
    }
  },
  {
    id: 4,
    title: {
      en: "Enter DFU Mode",
      vi: "Đưa MacBook Pro M2 vào chế độ DFU"
    },
    content: {
      en: `<ol>
        <li>Unplug the power cable from the MacBook Pro M2 for 10 seconds.</li>
        <li>Plug the power cable back in.</li>
        <li>Immediately press and hold the power button for 10 seconds (screen stays black).</li>
        <li>The MacBook Pro M2 should appear as a DFU device in Apple Configurator 2.</li>
      </ol>`,
      vi: `<ol>
        <li>Rút dây nguồn khỏi MacBook Pro M2 trong 10 giây.</li>
        <li>Cắm lại dây nguồn.</li>
        <li>Ngay lập tức nhấn giữ nút nguồn trong 10 giây (màn hình vẫn đen).</li>
        <li>MacBook Pro M2 sẽ xuất hiện dưới dạng thiết bị DFU trong Apple Configurator 2.</li>
      </ol>`
    }
  },
  {
    id: 5,
    title: {
      en: "Restore or Revive Firmware",
      vi: "Khôi phục hoặc hồi phục firmware"
    },
    content: {
      en: `<ul>
        <li>In Apple Configurator 2, locate the MacBook Pro M2 in DFU mode.</li>
        <li>Choose <strong>Revive</strong> (Actions > Advanced > Revive) to preserve user data.</li>
        <li>If Revive fails, choose <strong>Restore</strong> (Actions > Restore) to erase all data and reinstall macOS.</li>
      </ul>`,
      vi: `<ul>
        <li>Trong Apple Configurator 2, chọn MacBook Pro M2 ở chế độ DFU.</li>
        <li>Chọn <strong>Hồi phục</strong> (Hành động > Nâng cao > Hồi phục) để giữ dữ liệu người dùng.</li>
        <li>Nếu hồi phục thất bại, chọn <strong>Khôi phục</strong> (Hành động > Khôi phục) để xóa sạch dữ liệu và cài lại macOS.</li>
      </ul>`
    }
  },
  {
    id: 6,
    title: {
      en: "Complete the Process",
      vi: "Hoàn tất quá trình"
    },
    content: {
      en: `<ul>
        <li>Once complete, the MacBook Pro M2 restarts and shows the macOS Setup Assistant.</li>
        <li>If Activation Lock appears, you will need the original Apple ID credentials.</li>
      </ul>`,
      vi: `<ul>
        <li>Sau khi hoàn tất, MacBook Pro M2 sẽ khởi động lại và hiển thị trình trợ lý thiết lập macOS.</li>
        <li>Nếu xuất hiện Khóa Kích Hoạt, bạn cần thông tin Apple ID gốc.</li>
      </ul>`
    }
  },
  {
    id: 7,
    title: {
      en: "Important Notes",
      vi: "Lưu ý quan trọng"
    },
    content: {
      en: `<ul>
        <li>Use DFU mode only if macOS Recovery tools fail.</li>
        <li><span class="important">Activation Lock cannot be bypassed.</span> Contact the original owner if needed.</li>
        <li>Ensure stable USB-C connection and power supply throughout the process.</li>
      </ul>`,
      vi: `<ul>
        <li>Chỉ dùng chế độ DFU khi phục hồi macOS thất bại.</li>
        <li><span class="important">Không thể vượt qua Khóa Kích Hoạt.</span> Hãy liên hệ chủ sở hữu gốc nếu cần.</li>
        <li>Đảm bảo kết nối USB-C và nguồn điện ổn định trong suốt quá trình.</li>
      </ul>`
    }
  },
  {
    id: 8,
    title: {
      en: "Finished!",
      vi: "Hoàn thành!"
    },
    content: {
      en: '<div class="note">You have completed all steps. Good luck!</div>',
      vi: '<div class="note">Bạn đã hoàn thành tất cả các bước. Chúc thành công!</div>'
    }
  }
];
