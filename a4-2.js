window.A4 = window.A4 || {};
A4.p2 = `
<!-- ===== 04 运行设计条件 ===== -->
<section class="chapter" id="odc">
  <div class="ch-head"><div class="ch-num">04</div>
    <h2>运行设计条件（ODC）<span class="en">OPERATIONAL DESIGN CONDITIONS · 运行设计范围 / 系统状态 / 人员状态</span><span class="keyflag">正常运行条件</span></h2>
  </div>
  <p class="lede">运行设计条件界定“系统在什么条件下被认为处于正常运行”。它由三部分构成：运行设计范围（空间、道路、速度、时段、环境与设施的包络）、系统状态条件（允许的运行模式与车辆状态集合）、人员状态条件（乘客、安全员与运维的正常状态要求）。ODC 是判断场景属于 L-A / L-B / L-C 的基准，也是第 05 章符合性核对的标尺。</p>

  <h3 id="scope"><span class="h3-n">4.1</span>运行设计范围（Operational Design Envelope）</h3>
  <p>运行设计范围规定 CAMT 被授权、被设计去运行的外部条件包络；包络之外不属于正常运行，须降级或兜底。范围取值与 SyRS 的性能、接口、法规需求保持同一口径，不另设指标。</p>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 4-1　运行设计范围包络</caption>
      <colgroup><col style="width:16%"><col style="width:40%"><col style="width:24%"><col style="width:20%"></colgroup>
      <thead><tr><th>范围维度</th><th>设计包络（应满足）</th><th>边界 / 禁止条件</th><th>承接需求</th></tr></thead>
      <tbody>
        <tr><td class="id">地理范围</td><td>校区内部及跨校区连接段，约 2.4 km²†，串联 18 个站点†。</td><td>不含校外通勤、市政公交、货运与物流配送。</td><td>BR-01 · SyRS 2.1</td></tr>
        <tr><td class="id">道路类型</td><td>校园铺装道路、人车混行段、站点集散区；坡度 ≤ 8%†。</td><td>不在坡度 &gt; 8%† 路段停靠上下客；不占用消防通道与人行专用道。</td><td>POL-02 · SR-08</td></tr>
        <tr><td class="id">速度范围</td><td>校内最高 ≤ 25 km/h；22:00—06:00 通过宿舍区 ≤ 15 km/h†；跟驰距离随车速动态调整。</td><td>任何工况不得超速；感知置信度不足时禁止加速。</td><td>PR-01 · FR-03 · SR-01</td></tr>
        <tr><td class="id">服务时段</td><td>06:30—23:30 常态班次；23:30—06:30 预约制，预约响应 P95 ≤ 15 min†。</td><td>夜间时段不得在宿舍区形成可感知噪声扰民。</td><td>UR-01 · PR-04 · PR-08</td></tr>
        <tr><td class="id">气象与光照</td><td>适应降雨、积雪、扬尘与夜间低照明；超出感知能力时按降级策略降速绕行。</td><td>能见度/附着低于安全阈值仍继续高速行驶，属禁止状态。</td><td>FR-03 · BR-03</td></tr>
        <tr><td class="id">通信与定位</td><td>专网主要线路连续覆盖†；定位与先验地图有效；接管链路与业务网独立。</td><td>失联超过 5 s† 即判失效并触发 MRC，不得保持“链路可用”假设。</td><td>IR-02/07 · SR-03 · SR-06</td></tr>
        <tr><td class="id">能源与充电</td><td>单车续航 ≥ 120 km†，日运营 ≤ 100 km†；0—90% 充电 ≤ 2 h†；单站同时充电 ≤ 2 台†。</td><td>电量 &lt; 20%† 不再承接新单；绝缘异常禁止充电。</td><td>FR-08 · PR-07 · SR-04 · SR-05</td></tr>
        <tr><td class="id">载客载荷</td><td>额定载客 ≥ 6 人（含 2 站立位†），承载 ≥ 250 kg†；支持 1 名轮椅乘客及固定装置。</td><td>超载或坡板未收回时禁止关门起步。</td><td>PR-03 · FR-04 · SR-02</td></tr>
      </tbody>
    </table>
  </div>

  <h3 id="sysstate"><span class="h3-n">4.2</span>系统状态条件</h3>
  <p>系统运行模式沿用作业 2、作业 3 定义的四种：<strong>常态班次、预约按需、天气降级、人工兜底</strong>；车辆状态显式划分为七个：待命、载客运行、预约空驶、回场充电、远程接管、维护/OTA、停运。正常运行条件下允许出现的模式与状态、以及进入/退出约束如下。</p>
  <div class="duo">
    <div>
      <h5>MODES<b>四种运行模式</b></h5>
      <dl>
        <dt>常态班次</dt><dd>高峰按潮汐规律固定间隔连发，平峰合并同向订单，是 L-A 的主模式。</dd>
        <dt>预约按需</dt><dd>夜间与低峰按预约聚合派单，15 min† 内无新增则单车出发。</dd>
        <dt>天气降级</dt><dd>对应 L-B：降速、增大间距、减少复杂动作，必要时调入人工小巴补位。</dd>
        <dt>人工兜底</dt><dd>对应 L-C：远程接管或人工小巴介入，该线路暂停接单。</dd>
      </dl>
    </div>
    <div>
      <h5>STATES<b>七个车辆状态</b></h5>
      <dl>
        <dt>运营态</dt><dd>待命 · 载客运行 · 预约空驶：正常服务过程中的允许状态。</dd>
        <dt>保障态</dt><dd>回场充电 · 维护/OTA：非载客状态，在停运窗口或场站完成。</dd>
        <dt>安全相关态</dt><dd>远程接管 · 停运：异常与兜底状态，迁移条件须经评审确认。</dd>
      </dl>
    </div>
  </div>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 4-2　系统状态条件与迁移约束</caption>
      <colgroup><col style="width:18%"><col style="width:34%"><col style="width:30%"><col style="width:18%"></colgroup>
      <thead><tr><th>状态</th><th>正常条件下的含义</th><th>进入 / 退出约束</th><th>层级归属</th></tr></thead>
      <tbody>
        <tr><td class="id">待命</td><td>车辆在场站或站点待命，接受调度派单。</td><td>接单后进入载客运行；整备未完成不得接单。</td><td>L-A</td></tr>
        <tr><td class="id">载客运行</td><td>沿规划轨迹运送乘客，闭环跟踪。</td><td>到站完成上下客；出现退化/失效按降级链迁移。</td><td>L-A</td></tr>
        <tr><td class="id">预约空驶</td><td>无乘客驶往订单起点或接续站点。</td><td>空驶同样受速度、间距与避障约束。</td><td>L-A</td></tr>
        <tr><td class="id">回场充电</td><td>电量低于阈值后完成当前行程返场，由替换车接续。</td><td>低电量 &lt; 20%† 不再接新单；充电握手失败禁止接入。</td><td>L-A / L-C</td></tr>
        <tr><td class="id">远程接管</td><td>安全员经独立链路监督并下达指令。</td><td>故障 5 s† 内告警请求接管；接管期间线路暂停接单。</td><td>L-C</td></tr>
        <tr><td class="id">维护 / OTA</td><td>停运窗口内检修、保洁、升级与回滚。</td><td>不得影响在途车辆与线上订单；失败自动回滚。</td><td>保障态</td></tr>
        <tr><td class="id">停运</td><td>严重故障退出运营，拖离替换并归档复盘。</td><td>恢复运营须完成检查、确认与记录后方可进入待命。</td><td>L-C</td></tr>
      </tbody>
    </table>
  </div>
  <div class="box">
    <div class="box-t">状态条件红线 / STATE CONSTRAINTS</div>
    <ul>
      <li>不允许存在“故障但仍继续自动驾驶”的未定义中间态：任一安全相关能力丧失，必须按降级链进入受限降级、MRC、接管或停运之一。</li>
      <li>每次状态迁移须写入运行日志，作为可用性统计（MoE）与事件责任认定依据。</li>
      <li>恢复有效自动驾驶并经确认前，车辆不得自主恢复行驶。</li>
    </ul>
  </div>

  <h3 id="humstate"><span class="h3-n">4.3</span>人员状态条件</h3>
  <p>人员是闭环控制中的一环，人员状态异常本身就是场景风险的来源。ODC 对三类人员分别规定正常状态要求与不可接受的红线状态，与作业 3 的 SR-10（人员资质与并发容量）和易用性需求衔接。</p>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 4-3　人员状态条件</caption>
      <colgroup><col style="width:15%"><col style="width:33%"><col style="width:32%"><col style="width:20%"></colgroup>
      <thead><tr><th>人员角色</th><th>正常状态要求</th><th>红线 / 不可接受状态</th><th>承接需求</th></tr></thead>
      <tbody>
        <tr><td class="id">乘客（普通）</td><td>身体状态稳定，按指引先下后上；坐稳扶好，行李器材置于指定位置；可理解车内语音与视觉提示。</td><td>行驶中强行开门、站立坡板区域、拥挤堵塞通道、干扰驾驶行为；身体不适未被察觉。</td><td>FR-04 · USE-01/02</td></tr>
        <tr><td class="id">行动不便乘客</td><td>轮椅固定到位，坡板收回后车辆方可起步；必要时由随车人员或远程引导协助。</td><td>未完成固定即起步；轮椅占用通道或影响应急疏散。</td><td>FR-12 · SR-02 · UR-05</td></tr>
        <tr><td class="id">远程安全员</td><td>持证上岗、通过响应时限考核；在岗注意力集中；接管席并发容量可保证任一车辆请求按时限响应。</td><td>疲劳/脱岗/分心；告警被降级忽略；并发超出容量仍派单；接管后下达与环境冲突的指令。</td><td>SR-10 · UCA-03/14 · USE-03</td></tr>
        <tr><td class="id">现场运维人员</td><td>按规程完成整备、保洁、一级故障处置与站点检查；熟悉应急流程与人工小巴接驳衔接。</td><td>未完成安全检查即放车；故障记录缺失；应急响应超时。</td><td>SUST-01 · UR-16</td></tr>
      </tbody>
    </table>
  </div>
  <p class="note">人员状态条件与系统状态条件共同构成“人—机”闭环的正常判据：任一侧越出正常状态，都应在场景分析中作为潜在诱因记录，并在风险场景列表中核对其缓释措施。</p>
</section>

<!-- ===== 05 典型场景实例详述 ===== -->
<section class="chapter" id="case">
  <div class="ch-head"><div class="ch-num">05</div>
    <h2>典型场景实例详述：早高峰潮汐<span class="en">WORKED EXAMPLE · SC-1 MORNING PEAK</span><span class="keyflag">典型场景</span></h2>
  </div>
  <p class="lede">本章选取 L-A 层最具代表性的 SC-1 早高峰潮汐场景作为实例：它覆盖调度派单、站点候车、上下客、跟驰行驶与接续运力全链路，要素齐全、指标明确，既用于检验 ODC 包络是否可执行，也作为第 06 章风险分析的对象场景。</p>

  <h3><span class="h3-n">5.1</span>场景画像</h3>
  <div class="box">
    <div class="box-t">场景概览 / SCENARIO PROFILE</div>
    <ul>
      <li><strong>时间</strong>：工作日 07:30—08:20，属高峰时段（07:30—08:30）。</li>
      <li><strong>空间</strong>：三个宿舍组团 → 教学区主干线，经主环路与跨组团站点集散。</li>
      <li><strong>客流</strong>：同向出行集中，站点短时聚集；同线同向订单优先合并，满载率超过 80%† 触发连发。</li>
      <li><strong>运行模式</strong>：常态班次为主，调度按实时候车人数与预约聚合派单；必要时跨线换乘以主干站点为枢纽。</li>
      <li><strong>对应需求</strong>：UR-03 / UR-04 / UR-07 · BR-02；FR-01 / FR-02 / FR-05。</li>
    </ul>
  </div>

  <h3><span class="h3-n">5.2</span>场景要素填充（六维核对）</h3>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 5-1　SC-1 场景要素取值</caption>
      <colgroup><col style="width:15%"><col style="width:55%"><col style="width:30%"></colgroup>
      <thead><tr><th>维度</th><th>本场景中的具体要素</th><th>正常取值 / 约束</th></tr></thead>
      <tbody>
        <tr><td class="id">D-1 地理道路</td><td>宿舍组团站点、主干站点、换乘枢纽；铺装混行道路，站点集散区。</td><td>坡度 ≤ 8%†；站点不占消防通道与人行专用道；集散区无两轮聚集。</td></tr>
        <tr><td class="id">D-2 参与者</td><td>赶课学生、携带书包/器材者；少量骑行者与步行教职工；人工小巴在干线补位。</td><td>乘客先下后上；弱势参与者可被感知并让行；车辆不抢行。</td></tr>
        <tr><td class="id">D-3 环境条件</td><td>早晨自然光，正常路灯收尾；路面干燥；气温适宜。</td><td>无降水积雪，能见度与附着满足感知要求；车内温控 18—26 ℃†。</td></tr>
        <tr><td class="id">D-4 信息设施</td><td>专网覆盖、定位地图、站牌与 App 信息屏、统一认证与数据回传。</td><td>状态刷新 ≤ 5 s；到站预测 P90 误差 ≤ 2 min†；链路可用。</td></tr>
        <tr><td class="id">D-5 系统状态</td><td>多车处于载客运行/预约空驶态；调度队列、车辆状态与满载率实时同步。</td><td>载客 ≤ 额定；感知/通信/能量健康；低电量或故障车辆自动退出派单。</td></tr>
        <tr><td class="id">D-6 人员状态</td><td>乘客有序候车上车；远程安全员在岗监控；运维完成出车前整备。</td><td>安全员持证在岗；乘客无干扰行为；异常可经紧急按钮与语音求助。</td></tr>
      </tbody>
    </table>
  </div>

  <h3><span class="h3-n">5.3</span>事件序列与时序行为</h3>
  <p>按时间顺序把场景展开为可观测的行为脚本，每一步标注系统动作、涉及接口要素与承接需求，便于在评审时逐段走查。</p>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 5-2　SC-1 事件序列（Event Sequence）</caption>
      <colgroup><col style="width:8%"><col style="width:22%"><col style="width:36%"><col style="width:34%"></colgroup>
      <thead><tr><th>步序</th><th>阶段</th><th>系统行为</th><th>接口要素 / 承接需求</th></tr></thead>
      <tbody>
        <tr><td class="id">E-1</td><td>需求聚合</td><td>乘客经 App 或站牌二维码提交起讫点与乘车信息；订单确认 ≤ 3 s。</td><td>IR-01 乘客人机接口；FR-01 · UR-04</td></tr>
        <tr><td class="id">E-2</td><td>派单与运力配置</td><td>调度按订单、满载率与潮汐规律合并同向订单；满载率 &gt; 80%† 触发连发；主干站点支持跨线换乘。</td><td>CLD-1 调度；FR-02 · UR-03</td></tr>
        <tr><td class="id">E-3</td><td>到站预告</td><td>站牌与 App 展示车辆位置、预计到站与满载状态，刷新 ≤ 5 s；满载时提示等待下一班或步行替代路径。</td><td>STN-1 站点终端；FR-05 · UR-07</td></tr>
        <tr><td class="id">E-4</td><td>站台上下客</td><td>车辆对齐停靠，先下后上；坡板/轮椅固定到位；行驶中车门锁止，超载或坡板未收回禁止起步。</td><td>VEH-3 车门与底盘；FR-04 · SR-02</td></tr>
        <tr><td class="id">E-5</td><td>跟驰行驶</td><td>沿规划轨迹行驶，主干线发车间隔 ≤ 5 min†；持续感知行人/骑行者与前车，保持动态安全间距。</td><td>VEH-1/VEH-2 感知决策；FR-03 · PR-01/02</td></tr>
        <tr><td class="id">E-6</td><td>到站与接续</td><td>到站提示（视觉+语音双通道）；乘客下车后车辆接续下一订单；调度持续监控车队状态并安排替换。</td><td>CLD-2 车队监控；FR-05 · SUST-01</td></tr>
      </tbody>
    </table>
  </div>

  <h3><span class="h3-n">5.4</span>ODC 符合性核对</h3>
  <p>用第 04 章的运行设计条件逐条核对本场景，确认 SC-1 属于 ODC 内的正常运行场景；任一核对项不满足时，场景应迁移至 L-B 或 L-C 处理。</p>
  <div class="tbl-wrap">
    <table class="data">
      <caption>表 5-3　SC-1 对 ODC 的符合性核对</caption>
      <colgroup><col style="width:22%"><col style="width:48%"><col style="width:18%"><col style="width:12%"></colgroup>
      <thead><tr><th>ODC 条件</th><th>本场景核对结果</th><th>对应指标</th><th>结论</th></tr></thead>
      <tbody>
        <tr><td class="id">地理与道路</td><td>线路站点在校区包络内，路面与坡度合规，未进入禁行区域。</td><td>2.4 km²† / 18 站† / ≤8%†</td><td><span class="chip ok">符合</span></td></tr>
        <tr><td class="id">速度范围</td><td>白天主干线按 ≤ 25 km/h 运行，跟驰间距随速调整。</td><td>≤25 km/h</td><td><span class="chip ok">符合</span></td></tr>
        <tr><td class="id">时段与环境</td><td>工作日早晨，照明与气象正常，不触发夜间静音与天气降级。</td><td>06:30—23:30 常态</td><td><span class="chip ok">符合</span></td></tr>
        <tr><td class="id">通信与定位</td><td>专网、定位地图与接管链路处于可用状态。</td><td>刷新 ≤5 s；失联 5 s† 判失效</td><td><span class="chip ok">符合</span></td></tr>
        <tr><td class="id">能量与载荷</td><td>出车前电量满足单程与接续要求；载客不超额定。</td><td>续航 ≥120 km†；承载 ≥250 kg†</td><td><span class="chip ok">符合</span></td></tr>
        <tr><td class="id">系统状态</td><td>车辆处于待命/载客运行/预约空驶，无安全相关故障。</td><td>七状态机 · 无故障中间态</td><td><span class="chip ok">符合</span></td></tr>
        <tr><td class="id">人员状态</td><td>乘客有序，安全员在岗，运维完成整备。</td><td>SR-10 · SUST-01</td><td><span class="chip ok">符合</span></td></tr>
      </tbody>
    </table>
  </div>

  <h3><span class="h3-n">5.5</span>场景有效性度量（MoE）</h3>
  <p>本场景是否服务到位，用量化指标判定，口径与 StRS/SyRS 一致：高峰候车时长 P95 ≤ 6 min†；主干线发车间隔 ≤ 5 min†；到站预测 P90 误差 ≤ 2 min†；订单确认 ≤ 3 s；开放道路与弱势交通参与者零碰撞记录。指标同时作为后续场地与道路验证用例的验收基线。</p>
</section>
`;
