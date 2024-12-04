import { Modal } from "antd"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-monokai";
import {useEffect, useState} from "react";

interface SubmissionMessageModalProps {
	open: boolean;
	onClose: () => void;
	error?: string;
	message?: string;
}

const SubmissionMessageModal = (props: SubmissionMessageModalProps) => {
	const [editorHeight, setEditorHeight] = useState('auto');
	useEffect(() => {
		const lineHeight = 20;
		const text = props.error || props.message || '';
		const numberOfLines = (text.match(/\n/g) || []).length + 1;
		const newHeight = numberOfLines * lineHeight;
		if (newHeight > 300) {
			setEditorHeight('200px');
		} else {
			setEditorHeight(`${newHeight}px`);
		}
	}, [props.error, props.message]);
	
	return (
		<Modal
			title="Submission message"
			open={props.open}
			onCancel={props.onClose}
			footer={null}
		>
			<AceEditor
				mode={'text'}
				theme="monokai"
				value={props.error || props.message}
				fontSize={14}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				readOnly={true}
				setOptions={{
					showLineNumbers: true,
					tabSize: 2,
				}}
				editorProps={{$blockScrolling: false}}
				style={{width: '100%', height: editorHeight}}
				{...props}
			/>
		</Modal>
	)
}

export default SubmissionMessageModal;