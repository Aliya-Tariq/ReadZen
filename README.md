# ReadZen 📖

A clean, minimalist document reader web application that allows you to upload and read PDF and TXT files with customizable reading settings for an optimal reading experience.

![ReadZen Interface](https://via.placeholder.com/800x400/181818/b5b18d?text=ReadZen+-+Your+Personal+Reader)

## ✨ Features

- **File Upload Support**: Drag & drop or browse to upload PDF and TXT files
- **PDF Processing**: Extract and display text content from PDF files using PDF.js
- **Text File Support**: Display plain text files with proper formatting
- **Customizable Reading Experience**:
  - Text color picker
  - Background color picker  
  - Font family selection (13 different fonts)
  - Adjustable font size (14px - 36px)
  - Line height control (1.0 - 3.0)
  - Real-time preview of font size and line height changes
- **Clean UI**: Dark theme with intuitive navigation
- **Responsive Design**: Works across different screen sizes

## 🚀 Demo

Simply open `index.html` in your web browser to start using ReadZen. No server setup required!

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup and file input handling
- **CSS3**: 
  - Custom styling with dark theme
  - Flexbox layout
  - Dropdown menus and interactive elements
  - Google Fonts integration
- **Vanilla JavaScript**: 
  - File handling and drag & drop functionality
  - PDF text extraction
  - Dynamic DOM manipulation
  - Event handling for real-time updates

### Libraries & Dependencies
- **PDF.js v2.10.377**: Mozilla's JavaScript PDF rendering library
  - Used for parsing and extracting text from PDF files
  - CDN hosted for easy deployment
- **Google Fonts**: Web font service for typography options
  - Lato, Lora, Merriweather, Noto Sans, Open Sans, Roboto

### Key Technologies
- **FileReader API**: For reading uploaded files
- **Drag & Drop API**: For intuitive file uploading
- **Color Input**: HTML5 color picker for customization
- **Range Input**: Sliders for font size and line height control

## 📁 Project Structure

```
readzen-demo/
├── index.html          # Main HTML file with app structure
├── styles.css          # CSS styling and theme
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🔧 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/readzen.git
   cd readzen
   ```

2. **Open in browser**:
   - Simply open `index.html` in your preferred web browser
   - No build process or server setup required!

3. **Optional - Local server**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 📱 Usage

1. **Upload a file**:
   - Click "Upload File" button and select a PDF or TXT file
   - Or drag and drop a file onto the main content area

2. **Customize your reading experience**:
   - Click the "Settings" button to access customization options
   - Adjust text color, background color, font family, size, and line height
   - Changes preview in real-time for font size and line height
   - Click "Apply" to apply color and font family changes

3. **Read comfortably**:
   - Enjoy your document with your personalized reading settings

## 🎯 Supported File Formats

- **PDF files** (`.pdf`): Text extraction using PDF.js
- **Text files** (`.txt`): Direct display with line break formatting

## 🎨 Font Options

ReadZen includes 13 carefully selected fonts for optimal reading:

**Sans-serif fonts**:
- Arial, Roboto, Open Sans, Lato, Noto Sans, Verdana

**Serif fonts**:
- Merriweather, Lora, Georgia, Times New Roman, Crimson Text, Source Serif Pro, Noto Serif

## 🌟 Key Features Explained

### PDF Processing
- Utilizes Mozilla's PDF.js library for client-side PDF processing
- Extracts text content from all pages
- No server-side processing required

### Real-time Customization
- Font size and line height changes apply immediately as you drag the sliders
- Color and font family changes apply when you click the "Apply" button
- Settings persist during your session

### Drag & Drop Interface
- Intuitive file upload with visual feedback
- Highlight effect when dragging files over the drop zone
- Supports both drag & drop and traditional file selection

## 🔮 Future Enhancements

- [ ] Save reading preferences to localStorage
- [ ] Support for more file formats (DOCX, EPUB)
- [ ] Reading progress tracking
- [ ] Night mode toggle
- [ ] Text-to-speech integration
- [ ] Bookmarking system
- [ ] Mobile responsiveness improvements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [PDF.js](https://github.com/mozilla/pdf.js) by Mozilla for PDF processing
- [Google Fonts](https://fonts.google.com) for typography options
- Inspired by modern reading applications and document viewers

---

**Made with ❤️ for better reading experiences**
